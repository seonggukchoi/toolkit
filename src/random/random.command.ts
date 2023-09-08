import { randomUUID } from 'node:crypto';

import * as math from 'mathjs';
import { Command, Option } from 'nest-commander';

import { CopyableCommandRunner } from '../copyable/index.js';

import { RandomCommandOptions } from './random-command-options.interface.js';

@Command({ name: 'random', description: 'Generate a random string.' })
export class RandomCommand extends CopyableCommandRunner<RandomCommandOptions> {
  public override async run(passedParams: string[], options?: RandomCommandOptions | undefined): Promise<void> {
    if (!this.validateOptions(options)) {
      return;
    }

    if (options!.uuid) {
      this.print(randomUUID(), options!.copy);
    }

    if (options!.string && options!.length) {
      this.print(this.generateString(options!.length), options!.copy);
    }

    if (options!.number) {
      this.print(
        math.randomInt(options!.min ?? Number.MIN_SAFE_INTEGER, options!.max ?? Number.MAX_SAFE_INTEGER).toString(),
        options!.copy,
      );
    }
  }

  @Option({ flags: '-u, --uuid', description: 'Generate an UUID.' })
  private applyUuidOption(): true {
    return true;
  }

  @Option({ flags: '-s, --string', description: 'Generate a random string.' })
  private applyStringOption(): boolean {
    return true;
  }

  @Option({ flags: '-l, --length <length>', description: 'Set a length of random string.' })
  private applyLengthOption(length: string): number {
    return Number(length);
  }

  @Option({ flags: '-n, --number', description: 'Generate a random number.' })
  private applyNumberOption(): boolean {
    return true;
  }

  @Option({ flags: '--min <value>', description: 'Set a mininum value of range.' })
  private applyMinOption(value: string): number {
    return Number(value);
  }

  @Option({ flags: '--max <value>', description: 'Set a maximum value of range.' })
  private applyMaxOption(value: string): number {
    return Number(value);
  }

  private validateOptions(options?: RandomCommandOptions | undefined): boolean {
    if (!options) {
      return false;
    }

    if (options.uuid && options.string) {
      this.print('The --uuid and --string options cannot be used together.');

      return false;
    }

    if (options.uuid && options.number) {
      this.print('The --uuid and --number options cannot be used together.');

      return false;
    }

    if (options.string && options.number) {
      this.print('The --string and --number options cannot be used together.');

      return false;
    }

    if (options.string && !options.length) {
      this.print('The --string option requires the --length option.');

      return false;
    }

    if (!options.number && (typeof options.min === 'number' || typeof options.max === 'number')) {
      this.print('The --min and --max options can only be used with the --number option.');

      return false;
    }

    return true;
  }

  private generateString(length: number): string {
    const characterArray = ''
      .concat('abcdefghijklmnopqrstuvwxyz')
      .concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
      .concat('0123456789')
      .concat('~!@#$%^&*()_+₩-=|[]{};:,./<>?')
      .split('');

    return Array.from({ length })
      .fill(null)
      .map(() => characterArray[math.randomInt(0, characterArray.length - 1)])
      .join('');
  }
}

import { createHash } from 'node:crypto';

import { Command, Option } from 'nest-commander';

import { CopyableCommandRunner } from '../copyable/index.js';

import { HashCommandOptions } from './hash-command-options.interface.js';

@Command({ name: 'hash', description: 'Hash the input.' })
export class HashCommand extends CopyableCommandRunner<HashCommandOptions> {
  public override async run(passedParams: string[], options?: HashCommandOptions | undefined): Promise<void> {
    if (!this.validateOptions(options)) {
      return;
    }

    if (options!.md5) {
      this.print(
        createHash('md5')
          .update(passedParams.at(0) ?? '')
          .digest('hex'),
        options!.copy,
      );
    }

    if (options!.sha256) {
      this.print(
        createHash('sha256')
          .update(passedParams.at(0) ?? '')
          .digest('hex'),
        options!.copy,
      );
    }
  }

  @Option({ flags: '-m, --md5', description: 'Hash the input as MD5.' })
  private applyMd5Option(): boolean {
    return true;
  }

  @Option({ flags: '-s, --sha256', description: 'Hash the input as SHA-256.' })
  private hashSha256(): boolean {
    return true;
  }

  private validateOptions(options?: HashCommandOptions | undefined): boolean {
    if (!options) {
      return false;
    }

    if (options.md5 && options.sha256) {
      this.print('The options cannot be used together.');

      return false;
    }

    return true;
  }
}

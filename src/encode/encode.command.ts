import { Command, Option } from 'nest-commander';

import { CopyableCommandRunner } from '../copyable/index.js';

import { EncodeCommandOptions } from './encode-command-options.interface.js';

@Command({ name: 'encode', description: 'Encode or decode the input.' })
export class EncodeCommand extends CopyableCommandRunner<EncodeCommandOptions> {
  public override async run(passedParams: string[], options?: EncodeCommandOptions | undefined): Promise<void> {
    if (!this.validateOptions(options)) {
      return;
    }

    if (options!.decode) {
      if (options!.base64) {
        this.print(Buffer.from(passedParams.at(0) ?? '', 'base64').toString(), options!.copy);
      }

      if (options?.url) {
        this.print(decodeURIComponent(passedParams.at(0) ?? ''), options!.copy);
      }

      if (options!.hex) {
        this.print(Buffer.from(passedParams.at(0) ?? '', 'hex').toString(), options!.copy);
      }
    } else {
      if (options!.base64) {
        this.print(Buffer.from(passedParams.at(0) ?? '').toString('base64'), options!.copy);
      }

      if (options?.url) {
        this.print(encodeURIComponent(passedParams.at(0) ?? ''), options!.copy);
      }

      if (options!.hex) {
        this.print(Buffer.from(passedParams.at(0) ?? '').toString('hex'), options!.copy);
      }
    }
  }

  @Option({ flags: '-d, --decode', description: 'Decode the input.' })
  private applyDecodeOption(): boolean {
    return true;
  }

  @Option({ flags: '-b, --base64', description: 'Encode the input as base64.' })
  private applyBase64Option(): boolean {
    return true;
  }

  @Option({ flags: '-u, --url', description: 'Encode the input as URL.' })
  private applyUrlOption(): boolean {
    return true;
  }

  @Option({ flags: '-x, --hex', description: 'Encode the input as hex.' })
  private applyHexOption(): boolean {
    return true;
  }

  private validateOptions(options?: EncodeCommandOptions | undefined): boolean {
    if (!options) {
      return false;
    }

    if (options.base64 && options.url && options.hex) {
      this.print('The options cannot be used together.');

      return false;
    }

    return true;
  }
}

import { Command, Option } from 'nest-commander';

import { SerializationCommandOptions } from './serialization-command-options.interface.js';
import { SerializationCommand } from './serialization.command.js';

@Command({ name: 'encode', description: 'Encode the input.' })
export class EncodeCommand extends SerializationCommand {
  public override async run(passedParams: string[], options?: SerializationCommandOptions | undefined): Promise<void> {
    if (!this.validateOptions(options)) {
      return;
    }

    if (options!.base64) {
      this.print(Buffer.from(passedParams.at(0) ?? '').toString('base64'), options!.copy);
    }

    if (options!.hex) {
      this.print(Buffer.from(passedParams.at(0) ?? '').toString('hex'), options!.copy);
    }
  }

  @Option({ flags: '-b, --base64', description: 'Encode the input as base64.' })
  protected applyBase64Option(): boolean {
    return true;
  }

  @Option({ flags: '-x, --hex', description: 'Encode the input as hex.' })
  protected applyHexOption(): boolean {
    return true;
  }
}

import { Command, Option } from 'nest-commander';

import { SerializationCommandOptions } from './serialization-command-options.interface.js';
import { SerializationCommand } from './serialization.command.js';

@Command({ name: 'decode', description: 'Decode the input.' })
export class DecodeCommand extends SerializationCommand {
  public override async run(passedParams: string[], options?: SerializationCommandOptions | undefined): Promise<void> {
    if (!this.validateOptions(options)) {
      return;
    }

    if (options!.base64) {
      this.print(Buffer.from(passedParams.at(0) ?? '', 'base64').toString(), options!.copy);
    }

    if (options!.hex) {
      this.print(Buffer.from(passedParams.at(0) ?? '', 'hex').toString(), options!.copy);
    }
  }

  @Option({ flags: '-b, --base64', description: 'Decode the input from base64.' })
  protected applyBase64Option(): boolean {
    return true;
  }

  @Option({ flags: '-x, --hex', description: 'Decode the input from hex.' })
  protected applyHexOption(): boolean {
    return true;
  }
}

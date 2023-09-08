import { CopyableCommandRunner } from '../copyable/index.js';

import { SerializationCommandOptions } from './serialization-command-options.interface.js';

export abstract class SerializationCommand extends CopyableCommandRunner<SerializationCommandOptions> {
  public abstract override run(passedParams: string[], options?: SerializationCommandOptions | undefined): Promise<void>;

  protected validateOptions(options?: SerializationCommandOptions | undefined): boolean {
    if (!options) {
      return false;
    }

    if (options.base64 && options.hex) {
      this.print('The options cannot be used together.');

      return false;
    }

    return true;
  }
}

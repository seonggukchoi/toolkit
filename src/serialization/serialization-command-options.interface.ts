import { CopyableCommandOptions } from '../copyable/index.js';

export interface SerializationCommandOptions extends CopyableCommandOptions {
  base64?: boolean;
  hex?: boolean;
}

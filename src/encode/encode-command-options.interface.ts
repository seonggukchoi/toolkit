import { CopyableCommandOptions } from '../copyable/index.js';

export interface EncodeCommandOptions extends CopyableCommandOptions {
  decode?: boolean;
  base64?: boolean;
  url?: boolean;
  hex?: boolean;
}

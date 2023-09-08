import { CopyableCommandOptions } from '../copyable/index.js';

export interface HashCommandOptions extends CopyableCommandOptions {
  md5?: boolean;
  sha256?: boolean;
}

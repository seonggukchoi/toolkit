import { CopyableCommandOptions } from '../copyable/index.js';

export interface JwtCommandOptions extends CopyableCommandOptions {
  secret: string;
  decode?: boolean;
}

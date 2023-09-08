import { CopyableCommandOptions } from '../copyable/index.js';

export interface OtpCommandOptions extends CopyableCommandOptions {
  secret: string;
}

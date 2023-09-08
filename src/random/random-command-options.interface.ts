import { CopyableCommandOptions } from '../copyable/index.js';

export interface RandomCommandOptions extends CopyableCommandOptions {
  uuid?: boolean;
  string?: boolean;
  length?: number;
  number?: boolean;
  min?: number;
  max?: number;
}

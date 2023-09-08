import dayjs from 'dayjs';
import { Command, Option } from 'nest-commander';

import { CopyableCommandRunner } from '../copyable/index.js';

import { DateCommandOptions } from './date-command-options.interface.js';

@Command({ name: 'date', description: 'Format a date.' })
export class DateCommand extends CopyableCommandRunner<DateCommandOptions> {
  public override async run(passedParams: string[], options?: DateCommandOptions | undefined): Promise<void> {
    if (!this.validateOptions(options)) {
      return;
    }

    this.print(dayjs(passedParams.at(0)).format(options!.format), options!.copy);

    return;
  }

  @Option({ flags: '-f, --format <format>', description: 'Format a date.' })
  private applyFormatOption(format: string): string {
    return format;
  }

  private validateOptions(options?: DateCommandOptions | undefined): boolean {
    if (!options) {
      return false;
    }

    return true;
  }
}

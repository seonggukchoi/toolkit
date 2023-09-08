import { Command, Option } from 'nest-commander';
import * as otplib from 'otplib';

import { CopyableCommandRunner } from '../copyable/index.js';

import { OtpCommandOptions } from './otp-command-options.interface.js';

@Command({ name: 'otp', description: 'Generate a OTP code.' })
export class OtpCommand extends CopyableCommandRunner<OtpCommandOptions> {
  public override async run(passedParams: string[], options?: OtpCommandOptions | undefined): Promise<void> {
    if (!this.validateOptions(options)) {
      return;
    }

    this.print(otplib.authenticator.generate(options!.secret), options!.copy);
  }

  @Option({ flags: '-s, --secret <secret>', description: 'Generate a OTP code.' })
  private generateOtp(secret: string): string {
    return secret;
  }

  private validateOptions(options?: OtpCommandOptions | undefined): boolean {
    if (!options) {
      return false;
    }

    return true;
  }
}

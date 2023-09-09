import jwt from 'jsonwebtoken';
import { Command, Option } from 'nest-commander';

import { CopyableCommandRunner } from '../copyable/index.js';

import { JwtCommandOptions } from './jwt-command-options.interface.js';

@Command({ name: 'jwt', description: 'Sign or decode a JWT token.' })
export class JwtCommand extends CopyableCommandRunner<JwtCommandOptions> {
  public override async run(passedParams: string[], options?: JwtCommandOptions | undefined): Promise<void> {
    if (!this.validateOptions(options)) {
      return;
    }

    if (options!.decode) {
      this.print(jwt.decode(passedParams.at(0) ?? ''), options!.copy);
    } else {
      this.print(jwt.sign(passedParams.at(0) ?? '', options!.secret), options!.copy);
    }

    return;
  }

  @Option({ flags: '-s, --secret <secret>', description: 'The secret to use when signing the token.' })
  private applySecretOption(secret: string): string {
    return secret;
  }

  @Option({ flags: '-d, --decode', description: 'Decode the token instead of signing it.' })
  private applyDecodeOption(): boolean {
    return true;
  }

  private validateOptions(options?: JwtCommandOptions | undefined): boolean {
    if (!options) {
      return false;
    }

    if (!options.decode && !options.secret) {
      this.print('A secret is required when signing a token.', options.copy);

      return false;
    }

    return true;
  }
}

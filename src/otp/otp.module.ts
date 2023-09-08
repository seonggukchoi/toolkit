import { Module } from '@nestjs/common';

import { OtpCommand } from './otp.command.js';

@Module({ providers: [OtpCommand] })
export class OtpModule {}

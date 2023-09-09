import { Module } from '@nestjs/common';

import { DateCommand } from './date/date.command.js';
import { HashModule } from './hash/hash.module.js';
import { JwtModule } from './jwt/jwt.module.js';
import { OtpModule } from './otp/otp.module.js';
import { RandomModule } from './random/random.module.js';
import { EncodeModule } from './serialization/encode.module.js';

@Module({ imports: [RandomModule, EncodeModule, JwtModule, HashModule, OtpModule, DateCommand] })
export class AppModule {}

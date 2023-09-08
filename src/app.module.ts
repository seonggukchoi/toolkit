import { Module } from '@nestjs/common';

import { DateCommand } from './date/date.command.js';
import { HashModule } from './hash/hash.module.js';
import { OtpModule } from './otp/otp.module.js';
import { RandomModule } from './random/random.module.js';
import { SerializationModule } from './serialization/serialization.module.js';

@Module({ imports: [RandomModule, SerializationModule, HashModule, OtpModule, DateCommand] })
export class AppModule {}

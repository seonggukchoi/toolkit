import { Module } from '@nestjs/common';

import { JwtCommand } from './jwt.command.js';

@Module({ providers: [JwtCommand] })
export class JwtModule {}

import { Module } from '@nestjs/common';

import { EncodeCommand } from './encode.command.js';

@Module({ providers: [EncodeCommand] })
export class EncodeModule {}

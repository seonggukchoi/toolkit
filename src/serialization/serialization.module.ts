import { Module } from '@nestjs/common';

import { DecodeCommand } from './decode.command.js';
import { EncodeCommand } from './encode.command.js';

@Module({ providers: [EncodeCommand, DecodeCommand] })
export class SerializationModule {}

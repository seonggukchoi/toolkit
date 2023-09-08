import { Module } from '@nestjs/common';

import { HashCommand } from './hash.command.js';

@Module({ providers: [HashCommand] })
export class HashModule {}

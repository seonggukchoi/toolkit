import { Module } from '@nestjs/common';

import { RandomCommand } from './random.command.js';

@Module({ providers: [RandomCommand] })
export class RandomModule {}

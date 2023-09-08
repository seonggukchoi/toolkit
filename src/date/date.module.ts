import { Module } from '@nestjs/common';

import { DateCommand } from './date.command.js';

@Module({ providers: [DateCommand] })
export class DateModule {}

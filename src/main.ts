#!/usr/bin/env node
import { CommandFactory } from 'nest-commander';

import { AppModule } from './app.module.js';

async function bootstrap() {
  await CommandFactory.run(AppModule);
}

bootstrap();

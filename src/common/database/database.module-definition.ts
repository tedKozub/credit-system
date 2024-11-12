import { ConfigurableModuleBuilder } from '@nestjs/common';
import { DatabaseOptions } from './types/database-options';

export const {
  ConfigurableModuleClass: ConfigurableDatabaseModule,
  MODULE_OPTIONS_TOKEN: DATABASE_OPTIONS,
} = new ConfigurableModuleBuilder<DatabaseOptions>()
  .setClassMethodName('forRoot')
  .build();

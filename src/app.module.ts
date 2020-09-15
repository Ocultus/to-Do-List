import { Module } from '@nestjs/common';
import { TaskModule } from './modules/task/task.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [TaskModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

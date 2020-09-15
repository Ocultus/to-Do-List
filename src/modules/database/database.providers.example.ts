import { Sequelize } from 'sequelize-typescript';

import { Task } from '../../entity/task.entity';
import { Dialect } from 'sequelize';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres' as Dialect,
        host: 'localhost',
        port: 5432,
        username: '-',
        password: '-',
        database: '-',
      });
      sequelize.addModels([Task]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

import { Task } from '../../entity/task.entity';

export const tasksProviders = [{ provide: 'TaskRepository', useValue: Task }];

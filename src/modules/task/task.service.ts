import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Task } from '../../entity/task.entity';
import { CreateTaskDto } from './dto/createTaskDto.dto';
import { TaskStatus } from './taskStatus.enum';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TaskRepository')
    private readonly tasksRepository: typeof Task,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new Task();
    const { description } = createTaskDto;
    task.description = description;
    task.createdAt = new Date();
    task.status = TaskStatus.CREATED.toString();
    return task.save();
  }

  async getAllTasks(): Promise<Array<Task>> {
    return this.tasksRepository.findAll<Task>();
  }

  async getTaskById(id: number): Promise<Task> {
    const post = await this.tasksRepository.findByPk(id);
    if (!post) {
      throw new HttpException('No task found', HttpStatus.NOT_FOUND);
    }
    return post;
  }

  async getDeleteById(id: number): Promise<Task> {
    const task = await this.getTaskById(id);
    await task.destroy();
    return task;
  }

  async updateStatusById(id: number, status: TaskStatus) {
    const task = await this.getTaskById(id);
    task.status = status.toString();
    return task.save();
  }
}

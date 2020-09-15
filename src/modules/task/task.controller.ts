import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/createTaskDto.dto';
import { Task } from '../../entity/task.entity';
import { TaskService } from './task.service';
import { TaskStatus } from './taskStatus.enum';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Array<Task>> {
    return this.taskService.getAllTasks();
  }

  @Post('/create')
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }

  //Можно на get и delete создать ValidationPipe и проверять id на number
  @Get(':id')
  async getTaskById(@Param('id') id: number) {
    return this.taskService.getTaskById(id);
  }

  @Patch('/:id')
  async updateTaskStats(
    @Param('id') id: number,
    @Body('status') status: TaskStatus,
  ) {
    return this.taskService.updateStatusById(id, status);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.taskService.getDeleteById(id);
  }
}

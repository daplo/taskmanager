import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    console.log('title: ', title);
    console.log('description: ', description);
    return this.taskService.createTasks(title, description);
  }
}

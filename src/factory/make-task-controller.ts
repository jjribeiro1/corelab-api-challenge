import { prisma } from '../database';
import { TaskRepository } from '../repository/task.repository';
import { TaskService } from '../service/task.service';
import { TaskController } from '../controller/task.controller';
import { ValidateTaskDto } from '../middlewares/validateTaskDto';

export function makeTaskController() {
  const validateTaskDto = new ValidateTaskDto()
  const taskRepository = new TaskRepository(prisma)
  const taskService = new TaskService(taskRepository);
  const taskController = new TaskController(taskService);

  return {
    validateTaskDto,
    taskController,
  };
}

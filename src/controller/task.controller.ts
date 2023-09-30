import { Request, Response } from 'express';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskService } from '../service/task.service';

export class TaskController {
  constructor(private readonly service: TaskService) {}

  async create(req: Request, res: Response) {
    try {
      const body: CreateTaskDto = req.body;
      const task = await this.service.create(body);
      return res.status(201).json(task);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

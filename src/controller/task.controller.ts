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

  async findAll(req: Request, res: Response) {
    try {
      const tasks = await this.service.findAll();
      return res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id
      const task = await this.service.findById(id);
      return res.status(200).json(task);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

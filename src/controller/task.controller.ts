import { Request, Response } from 'express';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskService } from '../service/task.service';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Exception } from '../exceptions/exception';
import { ExceptionHandler } from '../exceptions/exception-handler';

export class TaskController {
  constructor(private readonly service: TaskService) {}

  create = async (req: Request, res: Response) => {
    try {
      const body: CreateTaskDto = req.body;
      const task = await this.service.create(body);
      return res.status(201).json(task);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {
      const tasks = await this.service.findAll();
      return res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  findById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const task = await this.service.findById(id);
      return res.status(200).json(task);
    } catch (error) {
      if (error instanceof Exception) {
        const { statusCode, message } = ExceptionHandler.execute(error);
        return res.status(statusCode).json({ message });
      }

      res.sendStatus(500);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const body: UpdateTaskDto = req.body;
      const task = await this.service.update(id, body);
      return res.status(200).json(task);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await this.service.remove(id);
      return res.sendStatus(204);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  addTaskToFavorites = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const favoriteTask = await this.service.addTaskToFavorites(id);
      return res.status(200).json(favoriteTask);
    } catch (error) {
      if (error instanceof Exception) {
        const { statusCode, message } = ExceptionHandler.execute(error);
        return res.status(statusCode).json({ message });
      }

      res.sendStatus(500);
    }
  };

  removeTaskFromFavorites = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const unfavoriteTask = await this.service.removeTaskFromFavorites(id);
      return res.status(200).json(unfavoriteTask);
    } catch (error) {
      if (error instanceof Exception) {
        const { statusCode, message } = ExceptionHandler.execute(error);
        return res.status(statusCode).json({ message });
      }

      res.sendStatus(500);
    }
  };
}

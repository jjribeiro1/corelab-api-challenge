import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

export class ValidateTaskDto {
  async handler(req: Request, res: Response, next: NextFunction) {
    const body: any = req.body;

    if (req.method === 'POST') {
      const dto = new CreateTaskDto();
      dto.title = body.title;
      dto.text = body.text;
      dto.color = body.color;
      dto.isFavorite = body.isFavorite;
      const errors = await validate(dto);
      if (errors.length > 0) return res.status(400).json(errors);
    }

    if (req.method === 'PATCH') {
      const dto = new UpdateTaskDto();
      dto.title = body.title;
      dto.text = body.text;
      dto.color = body.color;
      dto.isFavorite = body.isFavorite;
      const errors = await validate(dto);
      if (errors.length > 0) return res.status(400).json(errors);
    }

    next();
  }
}

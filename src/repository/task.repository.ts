import { PrismaClient } from '@prisma/client';
import { CreateTaskDto } from '../dto/create-task.dto';

export class TaskRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(dto: CreateTaskDto) {
    const { title, text, color, isFavorite } = dto;
    const createdTask = await this.prisma.task.create({
      data: {
        title,
        text,
        color,
        isFavorite,
      },
    });

    return createdTask;
  }

  async findById(id: string) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    return task;
  }

  async findAll() {
    const tasks = await this.prisma.task.findMany();
    return tasks;
  }
}

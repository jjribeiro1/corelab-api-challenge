import { PrismaClient } from '@prisma/client';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

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

  async update(id: string, dto: UpdateTaskDto) {
    const { title, text, color, isFavorite } = dto;
    const updatedTask = await this.prisma.task.update({
      where: { id },
      data: {
        title,
        text,
        color,
        isFavorite,
      },
    });

    return updatedTask;
  }

  async remove(id: string) {
    await this.prisma.task.delete({ where: { id } });
  }

  async addTaskToFavorites(id: string) {
    const favoriteTask = await this.prisma.task.update({
      where: { id },
      data: {
        isFavorite: true,
      },
    });

    return favoriteTask;
  }
}

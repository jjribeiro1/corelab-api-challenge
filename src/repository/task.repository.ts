import { PrismaClient } from '@prisma/client';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Task } from '../entities/Task';

export class TaskRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(dto: CreateTaskDto): Promise<Task> {
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

  async findById(id: string): Promise<Task> {
    const task = await this.prisma.task.findUniqueOrThrow({ where: { id } });
    return task;
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();
    return tasks;
  }

  async update(id: string, dto: UpdateTaskDto): Promise<Task> {
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

  async addTaskToFavorites(id: string): Promise<Task> {
    const favoriteTask = await this.prisma.task.update({
      where: { id },
      data: {
        isFavorite: true,
      },
    });

    return favoriteTask;
  }

  async removeTaskFromFavorites(id: string): Promise<Task> {
    const task = await this.prisma.task.update({
      where: { id },
      data: {
        isFavorite: false,
      },
    });

    return task;
  }
}

import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { TaskRepository } from '../repository/task.repository';

export class TaskService {
  constructor(private readonly repository: TaskRepository) {}

  async create(dto: CreateTaskDto) {
    return await this.repository.create(dto);
  }

  async findById(id: string) {
    const task = await this.repository.findById(id);
    if (!task) {
      throw new Error(`task with id: ${id} not found`);
    }
    return task;
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async update(id: string, dto: UpdateTaskDto) {
    await this.findById(id);
    return await this.repository.update(id, dto);
  }

  async remove(id: string) {
    await this.findById(id);
    return await this.repository.remove(id);
  }

  async addTaskToFavorites(id: string) {
    await this.findById(id);
    return await this.repository.addTaskToFavorites(id);
  }

  async removeTaskFromFavorites(id: string) {
    await this.findById(id);
    return await this.repository.removeTaskFromFavorites(id);
  }
}

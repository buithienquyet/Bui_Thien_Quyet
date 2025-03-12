import { TaskDTO } from './TaskDTO';
import { ITasksService } from './ITasksService';
import { injectable, inject } from 'inversify';
import { ITaskRepository } from './ITaskRepository';
import { ITaskFilter } from './ITaskFilter';

@injectable()
export class TasksService implements ITasksService {
  constructor(@inject('ITaskRepository') private taskRepository: ITaskRepository) {}

  async getAllTasks(): Promise<TaskDTO[]> {
    return this.taskRepository.getAllTasks();
  }

  async getTaskById(id: number): Promise<TaskDTO | null> {
    return this.taskRepository.getTaskById(id);
  }

  async createTask(task: Omit<TaskDTO, 'id'>): Promise<TaskDTO> {
    const currentDate: Date = new Date();

    task.createdAt = currentDate;
    task.updatedAt = currentDate;

    if (task.dueDate <= task.startDate) {
      throw new Error('Due date must be greater than start date');
    }

    return this.taskRepository.createTask(task);
  }

  async updateTask(task: Partial<TaskDTO>): Promise<TaskDTO | null> {
    return this.taskRepository.updateTask(task);
  }

  async deleteTask(id: number): Promise<boolean> {
    return this.taskRepository.deleteTask(id);
  }

  async getTasks(filter: ITaskFilter): Promise<TaskDTO[]> {
    return this.taskRepository.getTasks(filter);
  }
}

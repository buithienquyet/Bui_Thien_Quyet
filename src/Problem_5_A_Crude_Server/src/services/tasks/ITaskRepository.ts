import { ITaskFilter } from './ITaskFilter';
import { TaskDTO } from './TaskDTO';

export interface ITaskRepository {
  getAllTasks(): Promise<TaskDTO[]>;
  getTasks(filter: ITaskFilter): Promise<TaskDTO[]>;
  getTaskById(id: number): Promise<TaskDTO | null>;
  createTask(task: Omit<TaskDTO, 'id'>): Promise<TaskDTO>;
  updateTask(task: Partial<TaskDTO>): Promise<TaskDTO | null>;
  deleteTask(id: number): Promise<boolean>;
}

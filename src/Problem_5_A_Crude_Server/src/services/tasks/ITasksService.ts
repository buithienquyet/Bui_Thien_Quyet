import { TaskDTO } from './TaskDTO';
import { ITaskFilter } from './ITaskFilter';

export interface ITasksService {
  getAllTasks(): Promise<TaskDTO[]>;
  getTasks(filter: ITaskFilter): Promise<TaskDTO[]>;
  getTaskById(id: number): Promise<TaskDTO | null>;
  createTask(task: TaskDTO): Promise<any>;
  updateTask(task: TaskDTO): Promise<any>;
  deleteTask(id: number): Promise<boolean>;
}

import { injectable } from 'inversify';
import { db } from '..';
import { Task } from '../models/Task';
import { TaskDTO } from '../../services/tasks/TaskDTO';
import { ITaskRepository } from '../../services/tasks/ITaskRepository';
import { ITaskFilter } from '../../services/tasks/ITaskFilter';

@injectable()
export class TaskRepository implements ITaskRepository {
  private toDTO(model: Task): TaskDTO {
    const task = new TaskDTO({
      id: model.id,
      title: model.title,
      description: model.description,
      status: model.status,
      priority: model.priority,
      startDate: new Date(model.startDate),
      dueDate: new Date(model.dueDate),
      createdAt: new Date(model.createdAt),
      updatedAt: new Date(model.updatedAt),
    });

    return task;
  }

  private toModel(dto: TaskDTO): Task {
    const task = new Task();

    task.id = dto.id;

    task.title = dto.title;
    task.description = dto.description;
    task.status = dto.status;
    task.priority = dto.priority;
    task.startDate = dto.startDate;
    task.dueDate = dto.dueDate;
    task.createdAt = dto.createdAt;
    task.updatedAt = dto.updatedAt;

    return task;
  }

  async getAllTasks(): Promise<TaskDTO[]> {
    const tasks = await db<Task>('tasks').select('*');
    return tasks.map(this.toDTO);
  }

  async getTaskById(id: number): Promise<TaskDTO | null> {
    const task = await db<Task>('tasks').where('id', id).first();
    return task ? this.toDTO(task) : null;
  }

  async createTask(task: TaskDTO): Promise<TaskDTO> {
    const modelData = this.toModel(task);

    // console.log('modelData', modelData);

    const [id] = await db<Task>('tasks').insert({
      ...modelData,
    });
    const created = await db<Task>('tasks').where('id', id).first();
    return this.toDTO(created!);
  }

  async updateTask(task: TaskDTO): Promise<TaskDTO | null> {
    const modelData = this.toModel(task);
    const id = modelData.id;
    const updated = await db<Task>('tasks').where('id', id).update(modelData);
    if (!updated) return null;
    const result = await db<Task>('tasks').where('id', id).first();
    return result ? this.toDTO(result) : null;
  }

  async deleteTask(id: number): Promise<boolean> {
    const deleted = await db<Task>('tasks').where('id', id).delete();
    return deleted > 0;
  }

  async getTasks(filter: ITaskFilter): Promise<TaskDTO[]> {
    let query = db<Task>('tasks');

    if (filter.status) {
      query = query.where('status', filter.status);
    }

    if (filter.priority) {
      query = query.where('priority', filter.priority);
    }

    const tasks = await query;

    return tasks.map(this.toDTO);
  }
}

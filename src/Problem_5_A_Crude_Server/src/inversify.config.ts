import { Container } from 'inversify';
import { TasksService } from './services/tasks/TasksService';
import { ITasksService } from './services/tasks/ITasksService';
import TaskController from './controllers/tasksController';
import { ITaskRepository } from './services/tasks/ITaskRepository';
import { TaskRepository } from './database/repositories/TaskRepository';

const container = new Container();

container.bind<ITasksService>('ITasksService').to(TasksService).inRequestScope();
container.bind(TaskController).to(TaskController).inRequestScope();
container.bind<ITaskRepository>('ITaskRepository').to(TaskRepository).inRequestScope();

export { container };

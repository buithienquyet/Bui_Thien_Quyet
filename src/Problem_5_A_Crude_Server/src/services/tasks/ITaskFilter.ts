import { TaskStatus, TaskPriority } from './TaskDTO';

export interface ITaskFilter {
  status?: TaskStatus;
  priority?: TaskPriority;
}

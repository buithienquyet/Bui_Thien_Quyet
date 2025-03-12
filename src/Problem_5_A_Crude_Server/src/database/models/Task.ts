import { TaskStatus, TaskPriority } from '../../services/tasks/TaskDTO';

export class Task {
  id?: number;
  title: string = '';
  description?: string;
  status: TaskStatus = TaskStatus.TODO;
  priority: TaskPriority = TaskPriority.LOW;
  startDate!: Date;
  dueDate!: Date;
  createdAt!: Date;
  updatedAt!: Date;
}

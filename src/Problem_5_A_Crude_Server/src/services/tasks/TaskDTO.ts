export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export enum TaskStatus {
  PENDING = 'PENDING',
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export class TaskDTO {
  id!: number;
  title: string = '';
  description?: string;
  status: TaskStatus = TaskStatus.TODO;
  priority: TaskPriority = TaskPriority.LOW;
  startDate!: Date;
  dueDate!: Date;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(task: Partial<TaskDTO>) {
    Object.assign(this, task);
  }
}

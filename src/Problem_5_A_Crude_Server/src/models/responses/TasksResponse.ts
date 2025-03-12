import { TaskPriority, TaskStatus } from '../../services/tasks/TaskDTO';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateTaskResponse:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - status
 *         - priority
 *         - startDate
 *         - dueDate
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the task
 *           example: 100
 *         title:
 *           type: string
 *           description: The title of the task
 *           example: "Do the math homework"
 *         description:
 *           type: string
 *           example: Do tasks from 121 to 130
 *         status:
 *           type: string
 *           enum: [TODO, IN_PROGRESS, DONE]
 *           description: Current status of the task
 *           example: "TODO"
 *         priority:
 *           type: string
 *           enum: [LOW, MEDIUM, HIGH]
 *           description: Priority level of the task
 *           example: "LOW"
 *         startDate:
 *           type: string
 *           format: date-time
 *           description: When the task should start
 *           example: "2021-09-01T00:00:00.000Z"
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: When the task should be completed
 *           example: "2021-09-02T00:00:00.000Z"
 */
export class CreateTaskResponse {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  startDate: Date;
  dueDate: Date;

  constructor(task: {
    id: number;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    startDate: Date;
    dueDate: Date;
  }) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.status = task.status;
    this.priority = task.priority;
    this.startDate = task.startDate;
    this.dueDate = task.dueDate;
  }
}


/**
 * @swagger
 * components:
 *   schemas:
 *     GetTaskByIdResponse:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - status
 *         - priority
 *         - startDate
 *         - dueDate
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the task
 *           example: 100
 *         title:
 *           type: string
 *           description: The title of the task
 *           example: "Do the math homework"
 *         description:
 *           type: string
 *           example: Do tasks from 121 to 130
 *         status:
 *           type: string
 *           enum: [TODO, IN_PROGRESS, DONE]
 *           description: Current status of the task
 *           example: "TODO"
 *         priority:
 *           type: string
 *           enum: [LOW, MEDIUM, HIGH]
 *           description: Priority level of the task
 *           example: "LOW"
 *         startDate:
 *           type: string
 *           format: date-time
 *           description: When the task should start
 *           example: "2021-09-01T00:00:00.000Z"
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: When the task should be completed
 *           example: "2021-09-02T00:00:00.000Z"
 */
export class GetTaskByIdResponse {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  startDate: Date;
  dueDate: Date;

  constructor(task: {
    id: number;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    startDate: Date;
    dueDate: Date;
  }) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.status = task.status;
    this.priority = task.priority;
    this.startDate = task.startDate;
    this.dueDate = task.dueDate;
  }
}


/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateTaskByIdResponse:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - status
 *         - priority
 *         - startDate
 *         - dueDate
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the task
 *           example: 100
 *         title:
 *           type: string
 *           description: The title of the task
 *           example: "Do the math homework"
 *         description:
 *           type: string
 *           example: Do tasks from 121 to 130
 *         status:
 *           type: string
 *           enum: [TODO, IN_PROGRESS, DONE]
 *           description: Current status of the task
 *           example: "TODO"
 *         priority:
 *           type: string
 *           enum: [LOW, MEDIUM, HIGH]
 *           description: Priority level of the task
 *           example: "LOW"
 *         startDate:
 *           type: string
 *           format: date-time
 *           description: When the task should start
 *           example: "2021-09-01T00:00:00.000Z"
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: When the task should be completed
 *           example: "2021-09-02T00:00:00.000Z"
 */
export class UpdateTaskByIdResponse {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  startDate: Date;
  dueDate: Date;

  constructor(task: {
    id: number;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    startDate: Date;
    dueDate: Date;
  }) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.status = task.status;
    this.priority = task.priority;
    this.startDate = task.startDate;
    this.dueDate = task.dueDate;
  }
}


/**
 * @swagger
 * components:
 *   schemas:
 *     GetTasksResponseItem:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - status
 *         - priority
 *         - startDate
 *         - dueDate
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the task
 *           example: 100
 *         title:
 *           type: string
 *           description: The title of the task
 *           example: "Do the math homework"
 *         description:
 *           type: string
 *           example: Do tasks from 121 to 130
 *         status:
 *           type: string
 *           enum: [TODO, IN_PROGRESS, DONE]
 *           description: Current status of the task
 *           example: "TODO"
 *         priority:
 *           type: string
 *           enum: [LOW, MEDIUM, HIGH]
 *           description: Priority level of the task
 *           example: "LOW"
 *         startDate:
 *           type: string
 *           format: date-time
 *           description: When the task should start
 *           example: "2021-09-01T00:00:00.000Z"
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: When the task should be completed
 *           example: "2021-09-02T00:00:00.000Z"
 */
export class GetTasksResponseItem {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  startDate: Date;
  dueDate: Date;

  constructor(task: {
    id: number;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    startDate: Date;
    dueDate: Date;
  }) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.status = task.status;
    this.priority = task.priority;
    this.startDate = task.startDate;
    this.dueDate = task.dueDate;
  }
}
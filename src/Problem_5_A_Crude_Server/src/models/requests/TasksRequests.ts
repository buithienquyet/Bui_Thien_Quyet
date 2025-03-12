import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  MinLength,
  MaxLength,
  IsUUID,
  IsEnum,
  IsDate,
  isNotEmpty,
  IsNumber,
} from 'class-validator';
import { TaskPriority, TaskStatus } from '../../services/tasks/TaskDTO';
import { Type } from 'class-transformer';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateTaskRequest:
 *       type: object
 *       required:
 *         - title
 *         - status
 *         - priority
 *         - startDate
 *         - dueDate
 *       properties:
 *         title:
 *           type: string
 *           minLength: 3
 *           maxLength: 100
 *           description: The title of the task
 *           example: "Do the math homework"
 *         description:
 *           type: string
 *           minLength: 5
 *           maxLength: 500
 *           example: Do tasks from 121 to 130
 *         status:
 *           type: string
 *           enum: [TODO, IN_PROGRESS, DONE]
 *           default: TODO
 *           description: Current status of the task
 *           example: "TODO"
 *         priority:
 *           type: string
 *           enum: [LOW, MEDIUM, HIGH]
 *           default: LOW
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
export class CreateTaskRequest {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Title must be at least 3 characters long' })
  @MaxLength(100, { message: 'Title cannot exceed 100 characters' })
  title!: string;

  @IsString()
  @MinLength(5, { message: 'Description must be at least 5 characters long' })
  @MaxLength(500, { message: 'Description cannot exceed 500 characters' })
  description?: string;

  @IsNotEmpty()
  @IsEnum(TaskStatus)
  status!: TaskStatus;

  @IsNotEmpty()
  @IsEnum(TaskPriority)
  priority?: TaskPriority;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  startDate?: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  dueDate?: Date;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateTaskRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           minLength: 3
 *           maxLength: 100
 *           description: The title of the task
 *         description:
 *           type: string
 *           minLength: 5
 *           maxLength: 500
 *           description: Detailed description of the task
 *         status:
 *           type: string
 *           enum: [TODO, IN_PROGRESS, DONE]
 *           description: Current status of the task
 *         priority:
 *           type: string
 *           enum: [LOW, MEDIUM, HIGH]
 *           description: Priority level of the task
 *         startDate:
 *           type: string
 *           format: date-time
 *           description: When the task should start
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: When the task should be completed
 */
export class UpdateTaskRequest {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  id!: number;

  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'Title must be at least 3 characters long' })
  @MaxLength(100, { message: 'Title cannot exceed 100 characters' })
  title?: string;

  @IsOptional()
  @IsString()
  @MinLength(5, { message: 'Description must be at least 5 characters long' })
  @MaxLength(500, { message: 'Description cannot exceed 500 characters' })
  description?: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsEnum(TaskPriority)
  priority?: TaskPriority;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  startDate?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dueDate?: Date;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     GetTaskByIdRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: integer
 *           description: The ID of the task
 *
 */
export class GetTaskByIdRequest {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  id!: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     DeleteTaskByIdRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: integer
 *           description: The ID of the task
 *
 */
export class DeleteTaskByIdRequest {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  id!: number;
}

export class GetTasksRequest {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsEnum(TaskPriority)
  priority?: TaskPriority;
}





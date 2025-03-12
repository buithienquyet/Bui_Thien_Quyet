import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { ITasksService } from '../services/tasks/ITasksService';
import {
  CreateTaskRequest,
  UpdateTaskRequest,
  GetTaskByIdRequest,
  DeleteTaskByIdRequest,
  GetTasksRequest,
} from '../models/requests/TasksRequests';
import {
  CreateTaskResponse,
  GetTaskByIdResponse,
  GetTasksResponseItem,
  UpdateTaskByIdResponse,
} from '../models/responses/TasksResponse';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { TaskDTO } from '../services/tasks/TaskDTO';
import { ERROR_CODE } from '../constants/errorCodes';
import UserError from '../utils/UserError';

@injectable()
class TasksController {
  constructor(@inject('ITasksService') private tasksService: ITasksService) {}

  async getTasks(req: Request, res: Response) {
    try {
      const requestModel = plainToClass(GetTasksRequest, { ...req.query });
      const errors = await validate(requestModel);

      if (errors.length > 0) {
        return res.status(400).json(new UserError(ERROR_CODE.VALIDATION_ERROR, 'Invalid request data'));
      }

      const tasks = await this.tasksService.getTasks(requestModel);

      // console.log(tasks);

      const responseData = tasks.map(task => new GetTasksResponseItem(task));

      res.status(200).json(responseData);
    } catch (error) {
      res.status(500).json(new UserError(ERROR_CODE.INTERNAL_ERROR, 'Failed to retrieve tasks'));
    }
  }

  async getTaskById(req: Request, res: Response) {
    try {
      const requestModel = plainToClass(GetTaskByIdRequest, { ...req.params });

      // console.log('requestModel', requestModel);

      const errors = await validate(requestModel);

      if (errors.length > 0) {
        return res.status(400).json(new UserError(ERROR_CODE.VALIDATION_ERROR, 'Invalid request data'));
      }

      const task = await this.tasksService.getTaskById(requestModel.id);

      if (!task) {
        return res.status(404).json(new UserError(ERROR_CODE.NOT_FOUND, 'Task not found'));
      }

      const responseData = new GetTaskByIdResponse(task);

      res.status(200).json(responseData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve task' });
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      const requestModel = plainToClass(CreateTaskRequest, req.body);
      const errors = await validate(requestModel, { stopAtFirstError: true });

      if (errors.length > 0) {
        return res.status(400).json(new UserError(ERROR_CODE.VALIDATION_ERROR, 'Invalid request data'));
      }

      const taskDTO = new TaskDTO(requestModel);
      const newTask = await this.tasksService.createTask(taskDTO);

      const responseData = new CreateTaskResponse(newTask);

      res.status(201).json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ code: ERROR_CODE.INTERNAL_ERROR, message: 'Internal error' });
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const requestModel = plainToClass(UpdateTaskRequest, { ...req.params, ...req.body });
      const errors = await validate(requestModel);

      if (errors.length > 0) {
        return res.status(400).json(new UserError(ERROR_CODE.VALIDATION_ERROR, 'Invalid request data'));
      }

      const taskDTO = new TaskDTO(requestModel);

      const updatedTask = await this.tasksService.updateTask(taskDTO);
      if (!updatedTask) {
        return res.status(404).json(new UserError(ERROR_CODE.NOT_FOUND, 'Task not found'));
      }

      const responseData = new UpdateTaskByIdResponse(updatedTask);

      res.status(200).json(responseData);
    } catch (error) {
      res.status(500).json(new UserError(ERROR_CODE.INTERNAL_ERROR, 'Failed to update task'));
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const requestModel = plainToClass(DeleteTaskByIdRequest, { ...req.params });
      const errors = await validate(requestModel);

      if (errors.length > 0) {
        return res.status(400).json(new UserError(ERROR_CODE.VALIDATION_ERROR, 'Invalid request data'));
      }

      const result = await this.tasksService.deleteTask(requestModel.id);
      if (!result) {
        return res.status(404).json(new UserError(ERROR_CODE.NOT_FOUND, 'Task not found'));
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  }
}

export default TasksController;

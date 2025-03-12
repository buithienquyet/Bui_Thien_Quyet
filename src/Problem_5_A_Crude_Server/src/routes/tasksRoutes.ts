import { Router, Request, Response } from 'express';
import { container } from '../inversify.config';
import TasksController from '../controllers/tasksController';

const tasksRouter = Router();


/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get tasks
 *     parameters:
 *       - in: query
 *         name: status
 *         type: string
 *         enum: [TODO, IN_PROGRESS, DONE]
 *         description: Filter tasks by status
 *       - in: query
 *         name: priority
 *         type: string
 *         enum: [LOW, MEDIUM, HIGH]
 *         description: Filter tasks by priority
 *     responses:
 *       200:
 *         description: List of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GetTasksResponseItem'
 */
tasksRouter.get('/tasks', (req: Request, res: Response) => container.get(TasksController).getTasks(req, res));

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTaskRequest'
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateTaskResponse'
 */
tasksRouter.post('/tasks', (req: Request, res: Response) => container.get(TasksController).createTask(req, res));

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetTaskByIdResponse'
 *       404:
 *         description: Task not found
 */
tasksRouter.get('/tasks/:id', (req: Request, res: Response) => container.get(TasksController).getTaskById(req, res));

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTaskRequest'
 *     responses:
 *       200:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateTaskByIdResponse'
 *       404:
 *         description: Task not found
 */
tasksRouter.put('/tasks/:id', (req: Request, res: Response) => container.get(TasksController).updateTask(req, res));

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 */
tasksRouter.delete('/tasks/:id', (req: Request, res: Response) => container.get(TasksController).deleteTask(req, res));

export default tasksRouter;

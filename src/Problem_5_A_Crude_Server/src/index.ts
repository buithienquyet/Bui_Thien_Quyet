import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import taskRoutes from './routes/tasksRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Management API',
      version: '1.0.0',
      description: 'A simple CRUD API for managing tasks',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/models/**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});

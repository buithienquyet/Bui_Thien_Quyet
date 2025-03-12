# CRUD Server Project Structure

## Project Overview
A TypeScript-based REST API server implementing CRUD operations for task management using Express.js. That supports basic filtering on fields: priority and status

## Tech stack
- SQLite for simple database
- Express.js
- Knex for database accessing
- Inversify for dependency injection
- Layered architecture with layers: API/Business/Data Access

## How to run project
1. Copy sample database from /sample/database.sqlite to /src/database.sqlite
2. Install packages by running: 
```
npm i
```
3. Start server by running: 
```
npm start
```
4. Access swagger page (with default port 3000) via 
```
http://localhost:3000/api-docs
```

## Folder Structure

```
src/
├── controllers/      # API request handlers
│   └── tasksController.ts
├── database/         # Database configuration and models
├── routes/           # API route definitions
│   └── tasksRoutes.ts
├── services/         # Business logic
│   └── tasksService.ts
├── models           # Models for API requests/responses
├── app.ts           # Express application setup
├── inversify.config.ts  # Dependency injection configuration
└── index.ts        # Server entry point
```

## Component Descriptions

### Configuration Files
- `.prettierrc` - Code formatting rules for consistent code style
- `inversify.config.ts` - Dependency injection container setup
- `tsconfig.json` - TypeScript compiler configuration

### Core Components

#### Controllers (`/controllers`)
Contains request handlers that process HTTP requests and responses. 
The `tasksController.ts` manages task-related operations and input validation.

#### Database (`/database`)
Contains all database-related configurations and models and queries by knex:
- `models/` - Model definitions for database

#### Models (`/models`)
- Contains models for API request/response models

#### Routes (`/routes`)
API endpoint definitions with Swagger documentation. 
The `tasksRoutes.ts` defines all available task endpoints.

#### Services (`/services`)
Business logic layer that handles data operations. 
The `tasksService.ts` implements task CRUD operations.

### Main Files
- `index.ts` - HTTP server initialization and port configuration, Express application configuration, middleware setup, and route registration

## API Documentation
The API is documented using Swagger/OpenAPI specifications. Documentation is available at `/api-docs` when the server is running.

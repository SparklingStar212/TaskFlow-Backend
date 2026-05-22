# TaskFlow

TaskFlow is a simple REST API for managing tasks, built with Node.js, Express, MongoDB, and Mongoose.

## Features

- Create a task
- List all tasks
- Get a task by ID
- Update a task
- Delete a task

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- dotenv

## Project Structure

- `index.js` - App entry point and MongoDB connection
- `routes/route.js` - Task routes
- `controllers/controller.js` - Route handlers
- `models/model.js` - Mongoose task schema

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```dotenv
PORT=4602
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

3. Start the server:

```bash
node index.js
```

## API Endpoints

Base path: `/tasks`

All `/tasks` endpoints require an `Authorization: Bearer <token>` header from the login route.

- `POST /tasks` - Create a task
- `GET /tasks` - Get all tasks
- `GET /tasks/:id` - Get a task by ID
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Task Fields

- `title` - required string
- `description` - required string
- `status` - optional string, one of `To Do`, `In Progress`, or `Done`
- `createdAt` - auto-generated timestamp

## Notes

- Do not commit your `.env` file or any real credentials.
- If you want to use `npm start`, add a `start` script to `package.json`.

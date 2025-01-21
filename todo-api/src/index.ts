import { default as express, json } from 'express';
import cors from 'cors';
import { todoItemRoutes } from './services/todo-items';

const init = () => {
  const port = process.env.PORT ?? 8080;
  const server = express();

  // Allow requests from frontend - not sure if ok
  server.use(cors({
    origin: 'http://localhost:3000' 
  }));

  server.use(json());
  server.use('/items', todoItemRoutes());
  server.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};

init();

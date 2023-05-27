import express, { Application, Request, Response, NextFunction } from 'express';
import { expressLogger } from './middleware/logging';
import exampleRouter from './routes/exampleRouter'; // Assuming you have userRoutes file
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'node-ts-boilerplate API',
      version: '1.0.0',
    },
  },
  // Path to the API docs
  apis: ['./src/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

const app: Application = express();

app.use(express.json());
app.use(expressLogger);
app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );
  

// Use your routes...
app.use(exampleRouter);

// Error handling middleware...
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default app;

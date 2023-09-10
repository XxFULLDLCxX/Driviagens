import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import { errorHandler } from './middlewares/error-handler.js';
import { routes } from './routes/routes.js';

dotenv.config();

const PORT = process.env.SERVER_PORT || 5000;

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server online, running on port: ${PORT}`);
});
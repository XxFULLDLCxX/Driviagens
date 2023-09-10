import { Router } from 'express';
import { passengers_controller } from '../controllers/passengers-controllers.js';
import { validateSchema } from '../middlewares/schema-validation.js';
import { schemas } from '../schemas/schemas.js';

export const routes = Router();

routes.post("/passengers", validateSchema(schemas.passengers), passengers_controller.create);
// routes.post("/cities",);
// routes.post("/flights",);
// routes.post("/travels",);
// routes.get("/flights",);
// routes.get("/passengers/travels",);
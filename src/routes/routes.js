import { Router } from 'express';
import { passengers_controller } from '../controllers/passengers-controllers.js';
import { validateSchema } from '../middlewares/schema-validation.js';
import { schemas } from '../schemas/schemas.js';
import { cities_controller } from '../controllers/cities-controllers.js';

export const routes = Router();

routes.post("/passengers", validateSchema(schemas.passengers), passengers_controller.create);
routes.post("/cities", validateSchema(schemas.cities), cities_controller.create);
routes.post("/flights",);
routes.post("/travels",);
routes.get("/flights",);
routes.get("/passengers/travels",);
import { Router } from 'express';
import { cities_controller } from '../controllers/cities-controllers.js';
import { flights_controller } from '../controllers/flights-controllers.js';
import { passengers_controller } from '../controllers/passengers-controllers.js';
import { travels_controller } from '../controllers/travels-controllers.js';
import { validateBody, validateQuery } from '../middlewares/schema-validation.js';
import { schemas } from '../schemas/schemas.js';

export const routes = Router();

routes.post("/passengers", validateBody(schemas.passengers), passengers_controller.create);
routes.post("/cities", validateBody(schemas.cities), cities_controller.create);
routes.post("/flights", validateBody(schemas.flights), flights_controller.create);
routes.post("/travels", validateBody(schemas.travels), travels_controller.create);
routes.get("/flights", validateQuery(schemas.query_flights), flights_controller.read);
routes.get("/passengers/travels", validateQuery(schemas.query_passengers), passengers_controller.read);
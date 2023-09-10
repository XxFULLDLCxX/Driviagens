import { cities_service } from '../services/cities-services.js';

const create = async (req, res) => {
  const { name } = res.locals;
  await cities_service.create(name);
  res.sendStatus(201);
}

export const cities_controller = {
  create
}

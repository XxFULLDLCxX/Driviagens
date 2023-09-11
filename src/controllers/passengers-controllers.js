import { passengers_service } from '../services/passengers-services.js';

const create = async (req, res) => {
  const { firstName, lastName } = res.locals;
  await passengers_service.create(firstName, lastName);
  res.sendStatus(201);
};

const read = async (req, res) => {
  const { name, page } = req.query;
  const result = await passengers_service.read(name, page);
  res.send(result);
};

export const passengers_controller = {
  create, read
};

import { passengers_service } from '../services/passengers-services.js';

const create = async (req, res) => {
  const { firstName, lastName } = res.locals;
  await passengers_service.create(firstName, lastName);
  res.sendStatus(201);
};

const read = (req, res) => {

};

export const passengers_controller = {
  create, read
};

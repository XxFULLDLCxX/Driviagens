import { travels_service } from '../services/travels-services.js';

const create = async (req, res) => {
  const { passengerId, flightId } = res.locals;
  await travels_service.create(passengerId, flightId);
  res.sendStatus(201);
}

export const travels_controller = {
  create
}

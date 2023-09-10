import { flights_service } from '../services/flights-services.js';

const create = async (req, res) => {
  const { origin, destination, date } = res.locals;
  await flights_service.create(origin, destination, date);
  res.sendStatus(201);
}

const read = (req, res) => {

}

export const flights_controller = {
  create
}

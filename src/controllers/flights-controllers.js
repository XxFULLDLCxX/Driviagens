import { flights_service } from '../services/flights-services.js';

const create = async (req, res) => {
  const { origin, destination, date } = res.locals;
  await flights_service.create(origin, destination, date);
  res.sendStatus(201);
}

const read = async (req, res) => {
  const { origin, destination, 'bigger-date': bigger_date, 'smaller-date': smaller_date } = req.query;
  const flights = await flights_service.read(origin, destination, bigger_date, smaller_date);
  res.send(flights);
}

export const flights_controller = {
  create, read
}

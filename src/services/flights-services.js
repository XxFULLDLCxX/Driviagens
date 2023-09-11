import { errors } from '../errors/errors.js';
import { flights_repository } from '../repositories/flights-repositories.js';


const create = (origin, destination, date) => {
  if (origin === destination) throw errors.conflict('As cidades de origem e destino deve ser diferentes.')
  return flights_repository.create(origin, destination, date);
};


const read = async (origin, destination, bigger_date, smaller_date, page) => {
  const { rows: flights } = await flights_repository.read(origin, destination, bigger_date, smaller_date, page);
  return flights;
};

export const flights_service = {
  create, read
};
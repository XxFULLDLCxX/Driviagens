import { errors } from '../errors/errors.js';
import { flights_repository } from '../repositories/flights-repositories.js';


const create = (origin, destination, date) => {
  if (origin === destination) throw errors.conflict('As cidades de origem e destino deve ser diferentes.')
  return flights_repository.create(origin, destination, date);
};


const read = () => {
  return flights_repository.read();
};

export const flights_service = {
  create, read
};
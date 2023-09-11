import Joi from 'joi';
import { errors } from '../errors/errors.js';
import { flights_repository } from '../repositories/flights-repositories.js';


const create = (origin, destination, date) => {
  if (origin === destination) throw errors.conflict('As cidades de origem e destino deve ser diferentes.')
  return flights_repository.create(origin, destination, date);
};


const read = async (origin, destination, bigger_date, smaller_date) => {

  /* if ((bigger_date === undefined) !== (smaller_date === undefined))
    throw errors.unprocessableEntity(`"bigger-data" e "smaller-date" devem ser definidos em conjuto`);
   */
  const { rows: flights } = await flights_repository.read(origin, destination, bigger_date, smaller_date);
  return flights;
};

export const flights_service = {
  create, read
};
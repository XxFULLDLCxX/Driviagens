import { cities_repository } from '../repositories/cities-repositories.js';

const create = (name) => {
  return cities_repository.create(name);
};

export const cities_service = {
  create
};

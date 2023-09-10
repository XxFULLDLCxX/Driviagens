import { travels_repository } from '../repositories/travels-repositories.js';

const create = (origin, destination, date) => {
  return travels_repository.create(origin, destination, date);
};

export const travels_service = {
  create,
};

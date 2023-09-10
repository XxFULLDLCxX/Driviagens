import { passengers_repository } from '../repositories/passengers-repositories.js';

const create = (firstName, lastName) => {
  return passengers_repository.create(firstName, lastName);
};

const read = () => {

};

export const passengers_service = {
  create, read
};
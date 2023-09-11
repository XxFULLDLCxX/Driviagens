import { errors } from '../errors/errors.js';
import { passengers_repository } from '../repositories/passengers-repositories.js';

const create = (firstName, lastName) => {
  return passengers_repository.create(firstName, lastName);
};

const read = async (name, page) => {
  const { rows: result } = await passengers_repository.read(name, page);
  if (result.length > 10) throw errors.internalServer();
  return result;
};

export const passengers_service = {
  create, read
};
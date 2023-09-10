import { db } from '../database/db-connection.js';

const create = (firstName, lastName) => {
  return db.query(`INSERT INTO "passengers" ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName]);
};

const read = () => {};

export const passengers_repository = {
  create,
  read,
};

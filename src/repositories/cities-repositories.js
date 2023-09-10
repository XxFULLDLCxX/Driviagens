import { db } from '../database/db-connection.js';

const create = (name) => {
  return db.query(`INSERT INTO "cities" ("name") VALUES ($1);`, [name]);
};

export const cities_repository = {
  create
};

import { db } from '../database/db-connection.js';

const create = (origin, destination, date) => {
  return db.query(
    `INSERT INTO "flights" ("origin", "destination", "date") VALUES ($1, $2, $3)`, [origin, destination, date]
  );
};


const read = () => {
  return db.query(``, []);
};

export const flights_repository = {
  create, read
};
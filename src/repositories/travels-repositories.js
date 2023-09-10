import { db } from '../database/db-connection.js';

const create = (passengerId, flightId) => {
  return db.query(`INSERT INTO "travels" ("passengerId", "flightId") VALUES ($1, $2)`, [passengerId, flightId]);
};

export const travels_repository = {
  create
};

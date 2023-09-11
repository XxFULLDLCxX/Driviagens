import { db } from '../database/db-connection.js';

const create = (firstName, lastName) => {
  return db.query(`INSERT INTO "passengers" ("firstName", "lastName") VALUES ($1, $2);`, [firstName, lastName]);
};

const read = (name, page) => {
  let SQL_FILTER = ``;
  const SQL_ARGS = [];
  let SQL_PAGE = '';

  if (name) {
    SQL_ARGS.push(name);
    SQL_FILTER += `WHERE "firstName" || ' ' || "lastName" ILIKE '%' || $${SQL_ARGS.length} || '%'`;
  }
  if (page) {
    SQL_ARGS.push((Number(page) - 1) * 10);
  SQL_PAGE += `LIMIT 10 OFFSET $${SQL_ARGS.length}`;
  }

  let SQL_BASE = `
  SELECT "firstName" || ' ' || "lastName" AS "passenger", COUNT("passengerId") "travels" FROM "passengers"
  LEFT JOIN "travels" ON "passengerId" = "passengers".id
  ${SQL_FILTER}
  GROUP BY "passengers".id
  ORDER BY "travels" DESC
  ${SQL_PAGE}`;

  let SQL_FINAL = SQL_BASE + ';';
  return db.query(
    SQL_FINAL, SQL_ARGS
  );
};

export const passengers_repository = {
  create,
  read,
};

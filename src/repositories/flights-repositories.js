import { db } from '../database/db-connection.js';

const create = (origin, destination, date) => {
  return db.query(
    `INSERT INTO "flights" ("origin", "destination", "date") VALUES ($1, $2, $3);`, [origin, destination, date]
  );
};


const read = (origin, destination, bigger_date, smaller_date, page) => {
  let SQL_ARGS = [];
  let SQL_FILTER = '';
  let SQL_PAGE = '';

  if (origin) {
    SQL_ARGS.push(origin);
    SQL_FILTER += `${(SQL_FILTER.includes('WHERE') ? 'AND ' : 'WHERE ')} city1.name = $${SQL_ARGS.length}`;
  }
  if (destination) {
    SQL_ARGS.push(destination);
    SQL_FILTER += `${(SQL_FILTER.includes('WHERE') ? 'AND ' : 'WHERE ')} city2.name = $${SQL_ARGS.length}`;
  }
  if (bigger_date) {
    SQL_ARGS.push(bigger_date);
    SQL_FILTER += `${(SQL_FILTER.includes('WHERE') ? 'AND ' : 'WHERE ')} date <= TO_DATE($${SQL_ARGS.length}, 'DD-MM-YYYY')`;
  }
  if (smaller_date) {
    SQL_ARGS.push(smaller_date);
    SQL_FILTER += `${(SQL_FILTER.includes('WHERE') ? 'AND ' : 'WHERE ')} date >= TO_DATE($${SQL_ARGS.length}, 'DD-MM-YYYY')`;
  }

  if (page) {
    SQL_ARGS.push((Number(page) - 1) * 10);
    SQL_PAGE += `LIMIT 10 OFFSET $${SQL_ARGS.length}`;
  }

  const SQL_BASE = `
  SELECT flights.id, city1.name origin, city2.name destination, 
   TO_CHAR("date", 'DD-MM-YYYY') "date" FROM "flights"
  JOIN cities AS city1 ON origin = city1.id
  JOIN cities AS city2 ON destination = city2.id
  ${SQL_FILTER}
  ORDER BY flights."date" ASC
  ${SQL_PAGE}
  `;

  let SQL_FINAL = SQL_BASE + ';';
  return db.query(
    SQL_FINAL, SQL_ARGS
  );
};

export const flights_repository = {
  create, read
};
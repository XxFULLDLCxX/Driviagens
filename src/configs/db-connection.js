import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();

const config = {
  connectionString: process.env.DATABASE_URL
};

if (process.env.NODE_ENV === 'production') config.ssl = true;

export const db = new Pool(config);
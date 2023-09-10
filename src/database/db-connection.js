import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const configDatabase = {
    connectionString: process.env.DATABASE_URL
};

if (process.env.NODE_ENV === 'production') configDatabase.ssl = true;

export const db = new Pool(configDatabase);

import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema.js';

const databaseUrl = typeof import.meta !== 'undefined' && import.meta.env?.VITE_DRIZZLE_DATABASE_URL
  ? import.meta.env.VITE_DRIZZLE_DATABASE_URL
  : process.env.VITE_DRIZZLE_DATABASE_URL;

if (!databaseUrl) {
  throw new Error('VITE_DRIZZLE_DATABASE_URL is not defined. Please check your .env file.');
}

const sql = neon(databaseUrl);
export const db = drizzle(sql, { schema });


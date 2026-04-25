import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.VITE_DRIZZLE_DATABASE_URL);

async function migrate() {
  console.log('Creating carListing table...');
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS "carListing" (
        id SERIAL PRIMARY KEY,
        listing_title VARCHAR NOT NULL,
        tag_line VARCHAR,
        original_price VARCHAR,
        category VARCHAR,
        selling_price VARCHAR,
        type VARCHAR,
        make VARCHAR,
        condition VARCHAR,
        color VARCHAR,
        year VARCHAR,
        drive_type VARCHAR,
        model VARCHAR,
        fuel_efficiency VARCHAR,
        door VARCHAR,
        engine_size VARCHAR,
        cylinder VARCHAR,
        vin VARCHAR,
        offer_type VARCHAR,
        listing_description VARCHAR,
        features JSONB DEFAULT '[]',
        images JSONB DEFAULT '[]',
        user_id VARCHAR NOT NULL,
        user_email VARCHAR,
        user_name VARCHAR,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;
    console.log('Table created successfully!');
  } catch (error) {
    console.error('Error creating table:', error);
  }
}

migrate();


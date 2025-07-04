import { serial, pgTable, varchar } from "drizzle-orm/mysql-core";

export const CarListing = pgTable('carListing', {
    id: serial('id').primaryKey(),
    ListingTitle: varchar('ListingTitle').notNull(),
    TagLine: varchar('TagLine'),
    Category: varchar('Category'),
    Sellingprice: varchar('Sellingprice'),
    type: varchar('type'),
    Make: varchar('Make'),
    Condition: varchar('Condition'),
    color: varchar('color'),
    year: varchar('year'),
    drivetype: varchar('drivetype'),
    model: varchar('model'),
    fuelefficiency: varchar('fuelefficiency'),
    Door: varchar('Door'),
    EnginSize: varchar('EnginSize'),
    Cylinder: varchar('Cylinder'),
    vin: varchar('vin'),
    offerType: varchar('offerType'),
    ListingDescription: varchar('ListingDescription'),
});

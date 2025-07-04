 
const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  dialect: "postgresql",
  schema: "./Configs/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://drizzle%28sql%29_owner:DdzW5lkS8CPh@ep-morning-union-a1dehc9s.ap-southeast-1.aws.neon.tech/drizzle%28sql%29?sslmode=require",  // correct URL for Neon.tech PostgreSQL
  },
});

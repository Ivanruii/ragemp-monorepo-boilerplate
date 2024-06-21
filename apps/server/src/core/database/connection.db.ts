import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const dbHostname = process.env.DB_HOST as string;
const dbPort = parseInt(process.env.DB_PORT as string);
const dbName = process.env.DB_NAME as string;
const dbUsername = process.env.DB_USERNAME as string;
const dbPassword = process.env.DB_PASSWORD as string;

if (!dbName || !dbUsername || !dbPassword || !dbHostname || !dbPort) {
  throw new Error("Environment variables not set!");
}

const connection = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHostname,
  port: dbPort,
  dialect: "mysql",
  logging: false,
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
  },
  pool: {
    max: 10, // adjust this value based on your application's needs
  },
});

console.log(connection);

export { connection };

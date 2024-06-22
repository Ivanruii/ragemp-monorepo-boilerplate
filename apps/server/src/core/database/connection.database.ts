import { Dialect, Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: import.meta.env.VITE_DB_HOST,
  database: import.meta.env.VITE_DB_NAME,
  username: import.meta.env.VITE_DB_USERNAME,
  password: import.meta.env.VITE_DB_PASSWORD,
  dialect: import.meta.env.VITE_DB_DIALECT as Dialect,
});

export const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

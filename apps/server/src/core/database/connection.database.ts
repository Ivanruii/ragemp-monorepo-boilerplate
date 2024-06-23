import { Dialect, Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: import.meta.env.VITE_DB_HOST,
  database: import.meta.env.VITE_DB_NAME,
  username: import.meta.env.VITE_DB_USERNAME,
  password: import.meta.env.VITE_DB_PASSWORD,
  dialect: import.meta.env.VITE_DB_DIALECT as Dialect,
});

export const getDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return sequelize;
  } catch (error) {
    return Error(`Unable to connect to the database: ${error}`);
  }
};

getDatabaseConnection();

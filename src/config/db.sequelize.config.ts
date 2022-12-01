import "pg";
import { Sequelize } from "sequelize";

let sequelizeDB: Sequelize;

try {
  sequelizeDB = new Sequelize(process.env.DB_POSTGRES_URL!, {
    dialect: "postgres",
    logging: false,
  });

  if (process.env.SQL_SYNC_ENABLED) {
    sequelizeDB.sync({
      alter: true,
    });
  }

  console.log("Connected to Postgres DB");
} catch (e) {
  throw e;
}

export default sequelizeDB;

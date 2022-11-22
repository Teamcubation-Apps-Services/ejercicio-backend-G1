import "pg";
import { Sequelize } from "sequelize";

let sequelizeDB: Sequelize;

try {
  sequelizeDB = new Sequelize(process.env.DB_POSTGRES_URL!, {
    dialect: "postgres",
  });
  console.log("Connected to Postgres DB");
} catch (e) {
  throw e;
}

export default sequelizeDB;

import "pg";
import { Sequelize } from "sequelize";

const sequelizeDB = new Sequelize(process.env.DB_POSTGRES_URL!);

export default sequelizeDB;

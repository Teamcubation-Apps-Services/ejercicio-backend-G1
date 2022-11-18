import { DataTypes } from "sequelize";
import sequelizeDB from "../../config/db.sequelize.config";

const Cryptocurrency = sequelizeDB.define("cryptocurrency", {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  anualRevenue: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
});

export default Cryptocurrency;

import { DataTypes } from "sequelize";
import sequelizeDB from "../../config/db.sequelize.config";

const Cryptocurrency = sequelizeDB.define("cryptocurrency", {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  anualRevenue: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Cryptocurrency;

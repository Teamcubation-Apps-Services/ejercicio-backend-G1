import { DataTypes } from "sequelize";
import sequelizeDB from "../../config/db.sequelize.config";

const Wallet = sequelizeDB.define("wallet", {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  maxRefound: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vigency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Wallet;

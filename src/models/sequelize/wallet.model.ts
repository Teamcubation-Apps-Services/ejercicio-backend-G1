import { DataTypes } from "sequelize";
import sequelizeDB from "../../config/db.sequelize.config";

const Wallet = sequelizeDB.define("wallet", {
  name: {
    type: DataTypes.STRING,
  },
  discount: {
    type: DataTypes.INTEGER,
  },
  maxRefound: {
    type: DataTypes.INTEGER,
  },
  vigency: {
    type: DataTypes.STRING,
  },
});

export default Wallet;

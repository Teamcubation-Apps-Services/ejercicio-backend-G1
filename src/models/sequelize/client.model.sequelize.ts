import { DataTypes } from "sequelize";
import sequelizeDB from "../../config/db.sequelize.config";

const Client = sequelizeDB.define("client", {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Client;

import { DataTypes } from "sequelize";
import sequelizeDB from "../../config/db.sequelize.config";


const Client = sequelizeDB.define("client", {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  dni: {
    type: DataTypes.INTEGER,
  },
  phone: {
    type: DataTypes.INTEGER,
  },
});


export default Client;

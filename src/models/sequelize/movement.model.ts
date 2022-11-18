import { DataTypes } from "sequelize";
import sequelizeDB from "../../config/db.sequelize.config";
import Client from "./client.model";

const Movement = sequelizeDB.define("movement", {
  from: {
    type: DataTypes.STRING,
    references: {
      model: Client,
      key: "name",
    },
  },
  type: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  fee: {
    type: DataTypes.INTEGER,
  },
  to: {
    type: DataTypes.STRING,
    references: {
      model: Client,
      key: "name",
    },
  },
  cryptocurrency: {
    type: DataTypes.STRING,
  },
});

Client.hasMany(Movement, {
  foreignKey: "from",
});
Client.hasMany(Movement, {
  foreignKey: "to",
});
Movement.belongsTo(Client);

//TODO: add relation with cryptocurrency
export default Movement;

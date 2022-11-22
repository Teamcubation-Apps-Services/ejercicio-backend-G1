import { DataTypes } from "sequelize";
import sequelizeDB from "../../config/db.sequelize.config";
import Client from "./client.model.sequelize";

const Balance = sequelizeDB.define("balance", {
  client: {
    type: DataTypes.STRING,
    references: {
      model: Client,
      key: "name",
    },
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  cryptocurrency: {
    type: DataTypes.STRING,
  },
});

Client.hasMany(Balance, {
  foreignKey: "client",
});
Balance.belongsTo(Client, {
  foreignKey: "client",
  as: "Client",
});

export default Balance;

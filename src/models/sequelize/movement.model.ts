import { DataTypes } from "sequelize";
import sequelizeDB from "../../config/db.sequelize.config";
import Client from "./client.model";
import Cryptocurrency from "./cryptocurrency.model";

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
    references: {
      model: Cryptocurrency,
      key: "name",
    },
  },
});

Client.hasMany(Movement, {
  foreignKey: "from",
});
Client.hasMany(Movement, {
  foreignKey: "to",
});
Cryptocurrency.hasMany(Movement, {
  foreignKey: "cryptocurrency",
});

Movement.belongsTo(Client);
Movement.belongsTo(Cryptocurrency);

export default Movement;

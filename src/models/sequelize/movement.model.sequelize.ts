import { DataTypes } from "sequelize";
import sequelizeDB from "../../config/db.sequelize.config";
import Client from "./client.model.sequelize";
import Cryptocurrency from "./cryptocurrency.model.sequelize";

const Movement = sequelizeDB.define("movement", {
  from: {
    type: DataTypes.STRING,
    references: {
      model: Client,
      key: "name",
    },
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fee: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  to: {
    type: DataTypes.STRING,
    references: {
      model: Client,
      key: "name",
    },
    allowNull: false,
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

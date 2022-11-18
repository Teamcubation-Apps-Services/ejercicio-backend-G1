import express from "express";
import "./config/db.mongoose.config";
import benefitMongoRoutes from "./routes/mongo/benefit.route.mongo";
import clientMongoRoutes from "./routes/mongo/client.route.mongo";
import cryptocurrencyMongoRoutes from "./routes/mongo/cryptocurrency.route.mongo";
import movementMongoRoutes from "./routes/mongo/movement.route.mongo";
import balanceSequelizeRoutes from "./routes/sequelize/balance.route.sequelize";
import clientSequelizeRoutes from "./routes/sequelize/client.route.sequelize";
import cryptocurrencySequelizeRoutes from "./routes/sequelize/cryptocurrency.route.sequelize";
import movementSequelizeRoutes from "./routes/sequelize/movement.route.sequelize";
import walletSequelizeRoutes from "./routes/sequelize/wallet.route.sequelize";

const app = express();

app.use(express.json());

app.use("/mongo/benefit", benefitMongoRoutes);
app.use("/mongo/client", clientMongoRoutes);
app.use("/mongo/cryptocurrency", cryptocurrencyMongoRoutes);
app.use("/movement", movementMongoRoutes);

app.use("/sequelize/balance", balanceSequelizeRoutes);
app.use("/sequelize/client", clientSequelizeRoutes);
app.use("/sequelize/cryptocurrency", cryptocurrencySequelizeRoutes);
app.use("/sequelize/movement", movementSequelizeRoutes);
app.use("/sequelize/wallet", walletSequelizeRoutes);

export default app;

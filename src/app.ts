import express from "express";
import "./config/db.mongoose.config";
import benefitMongoRoutes from "./routes/mongoose/benefit.route.mongoose";
import clientMongoRoutes from "./routes/mongoose/client.route.mongoose";
import cryptocurrencyMongoRoutes from "./routes/mongoose/cryptocurrency.route.mongoose";
import movementMongoRoutes from "./routes/mongoose/movement.route.mongoose";
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
app.use("/mongo/movement", movementMongoRoutes);

app.use("/sequelize/balance", balanceSequelizeRoutes);
app.use("/sequelize/client", clientSequelizeRoutes);
app.use("/sequelize/cryptocurrency", cryptocurrencySequelizeRoutes);
app.use("/sequelize/movement", movementSequelizeRoutes);
app.use("/sequelize/wallet", walletSequelizeRoutes);

export default app;

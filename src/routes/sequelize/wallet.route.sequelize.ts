import Router from "express";
import {
  getWallet,
  createWallet,
  updateWallet,
  deleteWallet,
} from "../../controllers/sequelize/wallet.controller.sequelize";

const walletSequelizeRoutes = Router();

walletSequelizeRoutes.get("/get/:name", getWallet);

walletSequelizeRoutes.post("/create", createWallet);

walletSequelizeRoutes.patch("/update/:name", updateWallet);

walletSequelizeRoutes.delete("/delete/:name", deleteWallet);

export default walletSequelizeRoutes;

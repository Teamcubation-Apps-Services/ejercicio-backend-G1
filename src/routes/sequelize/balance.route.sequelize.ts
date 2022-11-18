import Router from "express";
import {
  getBalance,
  createBalance,
  updateBalance,
  deleteBalance,
} from "../../controllers/sequelize/balance.controller.sequelize";

const balanceSequelizeRoutes = Router();

balanceSequelizeRoutes.get("/get/:name", getBalance);

balanceSequelizeRoutes.post("/create", createBalance);

balanceSequelizeRoutes.patch("/update/:name", updateBalance);

balanceSequelizeRoutes.delete("/delete/:name", deleteBalance);

export default balanceSequelizeRoutes;

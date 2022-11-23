import Router from "express";
import {
  getBalance,
  createBalance,
  updateBalance,
  deleteBalance,
} from "../../controllers/sequelize/balance.controller.sequelize";

const balanceSequelizeRoutes = Router();

balanceSequelizeRoutes.get("/get/:client/:crypto", getBalance);

balanceSequelizeRoutes.post("/create/:client", createBalance);

balanceSequelizeRoutes.patch("/update/:client/:crypto", updateBalance);

balanceSequelizeRoutes.delete("/delete/:client/:crypto", deleteBalance);

export default balanceSequelizeRoutes;

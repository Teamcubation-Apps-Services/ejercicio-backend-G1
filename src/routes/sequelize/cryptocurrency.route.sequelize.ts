import Router from "express";
import {
  getCryptocurrency,
  createCryptocurrency,
  updateCryptocurrency,
  deleteCryptocurrency,
} from "../../controllers/sequelize/cryptocurrency.controller.sequelize";

const cryptocurrencySequelizeRoutes = Router();

cryptocurrencySequelizeRoutes.get("/get/:name", getCryptocurrency);

cryptocurrencySequelizeRoutes.post("/create", createCryptocurrency);

cryptocurrencySequelizeRoutes.patch("/update/:name", updateCryptocurrency);

cryptocurrencySequelizeRoutes.delete("/delete/:name", deleteCryptocurrency);

export default cryptocurrencySequelizeRoutes;

import Router from "express";
import {
  getCryptocurrency,
  createCryptocurrency,
  updateCryptocurrency,
  deleteCryptocurrency,
} from "../../controllers/mongo/cryptocurrency.controller.mongo";

const cryptocurrencyMongoRoutes = Router();

cryptocurrencyMongoRoutes.get("/get/:name", getCryptocurrency);

cryptocurrencyMongoRoutes.post("/create", createCryptocurrency);

cryptocurrencyMongoRoutes.patch("/update/:name", updateCryptocurrency);

cryptocurrencyMongoRoutes.delete("/delete/:name", deleteCryptocurrency);

export default cryptocurrencyMongoRoutes;

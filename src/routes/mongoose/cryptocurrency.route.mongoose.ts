import Router from "express";
import {
  getCryptocurrency,
  createCryptocurrency,
  updateCryptocurrency,
  deleteCryptocurrency,
} from "../../controllers/mongoose/cryptocurrency.controller.mongoose";

const cryptocurrencyMongoRoutes = Router();

cryptocurrencyMongoRoutes.get("/get/:name", getCryptocurrency);

cryptocurrencyMongoRoutes.post("/create", createCryptocurrency);

cryptocurrencyMongoRoutes.patch("/update/:name", updateCryptocurrency);

cryptocurrencyMongoRoutes.delete("/delete/:name", deleteCryptocurrency);

export default cryptocurrencyMongoRoutes;

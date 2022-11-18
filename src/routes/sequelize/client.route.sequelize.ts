import Router from "express";
import {
  getClient,
  createClient,
  updateClient,
  deleteClient,
} from "../../controllers/sequelize/client.controller.sequelize";

const clientSequelizeRoutes = Router();

clientSequelizeRoutes.get("/get/:name", getClient);

clientSequelizeRoutes.post("/create", createClient);

clientSequelizeRoutes.patch("/update/:name", updateClient);

clientSequelizeRoutes.delete("/delete/:name", deleteClient);

export default clientSequelizeRoutes;

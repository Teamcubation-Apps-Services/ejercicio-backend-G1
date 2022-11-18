import Router from "express";
import {
  getClient,
  createClient,
  updateClient,
  deleteClient,
} from "../../controllers/mongoose/client.controller.mongoose";

const clientMongoRoutes = Router();

clientMongoRoutes.get("/get/:name", getClient);

clientMongoRoutes.post("/create", createClient);

clientMongoRoutes.patch("/update/:name", updateClient);

clientMongoRoutes.delete("/delete/:name", deleteClient);

export default clientMongoRoutes;

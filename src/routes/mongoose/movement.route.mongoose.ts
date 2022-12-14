import Router from "express";
import {
  getMovement,
  createMovement,
  updateMovement,
  deleteMovement,
} from "../../controllers/mongoose/movement.controller.mongoose";

const movementMongoRoutes = Router();

movementMongoRoutes.get("/get/:id", getMovement);

movementMongoRoutes.post("/create", createMovement);

movementMongoRoutes.patch("/update/:id", updateMovement);

movementMongoRoutes.delete("/delete/:id", deleteMovement);

export default movementMongoRoutes;

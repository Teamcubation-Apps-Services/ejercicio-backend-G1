import Router from "express";
import {
  getMovement,
  createMovement,
  updateMovement,
  deleteMovement,
} from "../../controllers/sequelize/movement.controller.sequelize";

const movementSequelizeRoute = Router();

movementSequelizeRoute.get("/get/:id", getMovement);

movementSequelizeRoute.post("/create", createMovement);

movementSequelizeRoute.patch("/update/:id", updateMovement);

movementSequelizeRoute.delete("/delete/:id", deleteMovement);

export default movementSequelizeRoute;

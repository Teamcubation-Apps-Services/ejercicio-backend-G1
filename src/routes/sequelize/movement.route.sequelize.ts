import Router from "express";
import {
  getMovement,
  createMovement,
  updateMovement,
  deleteMovement,
} from "../../controllers/sequelize/movement.controller.sequelize";

const movementSequelizeRoutes = Router();

movementSequelizeRoutes.get("/get/:id", getMovement);

movementSequelizeRoutes.post("/create", createMovement);

movementSequelizeRoutes.patch("/update/:id", updateMovement);

movementSequelizeRoutes.delete("/delete/:id", deleteMovement);

export default movementSequelizeRoutes;

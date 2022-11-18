import Router from "express";
import {
  getBenefit,
  createBenefit,
  updateBenefit,
  deleteBenefit,
} from "../../controllers/mongo/benefit.controller.mongo";

const benefitMongoRoutes = Router();

benefitMongoRoutes.get("/get/:name", getBenefit);

benefitMongoRoutes.post("/create", createBenefit);

benefitMongoRoutes.patch("/update/:name", updateBenefit);

benefitMongoRoutes.delete("/delete/:name", deleteBenefit);

export default benefitMongoRoutes;

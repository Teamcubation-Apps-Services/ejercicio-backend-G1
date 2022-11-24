import Benefit from "../../models/mongoose/benefit.model.mongoose";
import { MongoBenefit } from "../../mongoTypes";

async function find(name: string) {
  return await Benefit.findOne({ name });
}

async function create(benefit: MongoBenefit) {
  return await Benefit.create(benefit);
}

async function update(name: string, benefit: MongoBenefit) {
  return await Benefit.updateOne({ name }, benefit);
}

async function remove(name: string) {
  return await Benefit.deleteOne({ name });
}

const benefitRepository = {
  find,
  create,
  update,
  remove,
};

export default benefitRepository;

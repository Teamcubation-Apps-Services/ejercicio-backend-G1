import Movement from "../../models/mongoose/movement.model.mongoose";
import { MongoMovement } from "../../mongoTypes";

async function find(id: string) {
  return await Movement.findOne({ id });
}

async function create(movement: MongoMovement) {
  return await Movement.create(movement);
}

async function update(id: string, movement: MongoMovement) {
  return await Movement.updateOne({ id }, movement);
}

async function remove(id: string) {
  return await Movement.deleteOne({ id });
}

const MovementRepository = {
  find,
  create,
  update,
  remove,
};

export default MovementRepository;

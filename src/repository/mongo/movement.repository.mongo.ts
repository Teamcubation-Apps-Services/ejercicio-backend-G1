import Movement from "../../models/mongoose/movement.model";

async function find(id: string) {
  return await Movement.find({ id });
}

async function create(movement: any) {
  return await Movement.create(Movement);
}

async function update(id: string, movement: any) {
  return await Movement.updateOne({ id }, Movement);
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

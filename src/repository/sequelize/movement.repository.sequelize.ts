import Movement from "../../models/sequelize/movement.model.sequelize";

async function find(name: string) {
  return await Movement.findByPk(name);
}

async function create(movement: any) {
  return await Movement.create(movement);
}

async function update(name: string, movement: any) {
  return await Movement.update(movement, { where: { name } });
}

async function remove(name: string) {
  return await Movement.destroy({ where: { name } });
}

const movementRepository = {
  find,
  create,
  update,
  remove,
};

export default movementRepository;

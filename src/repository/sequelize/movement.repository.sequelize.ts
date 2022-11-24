import Movement from "../../models/sequelize/movement.model.sequelize";
import { SequelizeMovement } from "../../sequelizeTypes";

async function find(id: string) {
  return await Movement.findByPk(id);
}

async function create(movement: SequelizeMovement) {
  return await Movement.create(movement);
}

async function update(id: string, movementData: SequelizeMovement) {
  return await Movement.update(movementData, { where: { id } });
}

async function remove(id: string) {
  return await Movement.destroy({ where: { id } });
}

const movementRepository = {
  find,
  create,
  update,
  remove,
};

export default movementRepository;

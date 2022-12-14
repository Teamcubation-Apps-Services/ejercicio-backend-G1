import Client from "../../models/sequelize/client.model.sequelize";
import { SequelizeClient } from "../../sequelizeTypes";

async function find(name: string) {
  return await Client.findByPk(name);
}

async function create(client: SequelizeClient) {
  return await Client.create(client);
}

async function update(name: string, client: SequelizeClient) {
  return await Client.update(client, { where: { name } });
}

async function remove(name: string) {
  return await Client.destroy({ where: { name } });
}

const clientRepository = {
  find,
  create,
  update,
  remove,
};

export default clientRepository;

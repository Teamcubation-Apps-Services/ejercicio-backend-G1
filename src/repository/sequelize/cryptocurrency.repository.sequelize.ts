import Cryptocurrency from "../../models/sequelize/cryptocurrency.model.sequelize";
import { SequelizeCryptocurrency } from "../../sequelizeTypes";

async function find(name: string) {
  return await Cryptocurrency.findByPk(name);
}

async function create(cryptocurrency: SequelizeCryptocurrency) {
  return await Cryptocurrency.create(cryptocurrency);
}

async function update(name: string, cryptocurrency: SequelizeCryptocurrency) {
  return await Cryptocurrency.update(cryptocurrency, { where: { name } });
}

async function remove(name: string) {
  return await Cryptocurrency.destroy({ where: { name } });
}

const cryptocurrencyRepository = {
  find,
  create,
  update,
  remove,
};

export default cryptocurrencyRepository;

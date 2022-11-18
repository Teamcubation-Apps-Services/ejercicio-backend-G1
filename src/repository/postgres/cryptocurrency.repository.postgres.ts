import Cryptocurrency from "../../models/sequelize/cryptocurrency.model";

async function find(name: string) {
  return await Cryptocurrency.findByPk(name);
}

async function create(cryptocurrency: any) {
  return await Cryptocurrency.create(cryptocurrency);
}

async function update(name: string, cryptocurrency: any) {
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

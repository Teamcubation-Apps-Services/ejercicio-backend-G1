import Cryptocurrency from "../../models/mongoose/cryptocurrency.model.mongoose";

async function find(name: string) {
  return await Cryptocurrency.find({ name });
}

async function create(cryptocurrency: any) {
  return await Cryptocurrency.create(cryptocurrency);
}

async function update(name: string, cryptocurrency: any) {
  return await Cryptocurrency.updateOne({ name }, cryptocurrency);
}

async function remove(name: string) {
  return await Cryptocurrency.deleteOne({ name });
}

const cryptocurrencyRepository = {
  find,
  create,
  update,
  remove,
};

export default cryptocurrencyRepository;

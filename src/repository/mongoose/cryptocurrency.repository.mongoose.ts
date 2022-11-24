import Cryptocurrency from "../../models/mongoose/cryptocurrency.model.mongoose";
import { MongoCryptocurrency } from "../../mongoTypes";

async function find(name: string) {
  return await Cryptocurrency.findOne({ name });
}

async function create(cryptocurrency: MongoCryptocurrency) {
  return await Cryptocurrency.create(cryptocurrency);
}

async function update(name: string, cryptocurrency: MongoCryptocurrency) {
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

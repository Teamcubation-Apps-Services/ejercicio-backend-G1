import Client from "../../models/mongoose/client.model.mongoose";
import { MongoClient } from "../../mongoTypes";

async function find(name: string) {
  return await Client.findOne({ name });
}

async function create(client: MongoClient) {
  return await Client.create(client);
}

async function update(name: string, client: MongoClient) {
  return await Client.updateOne({ name }, client);
}

async function remove(name: string) {
  return await Client.deleteOne({ name });
}

const clientRepository = {
  find,
  create,
  update,
  remove,
};

export default clientRepository;

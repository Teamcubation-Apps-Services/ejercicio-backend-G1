import Client from "../../models/mongoose/client.model";

async function find(name: string) {
  return await Client.find({ name });
}

async function create(client: any) {
  return await Client.create(client);
}

async function update(name: string, client: any) {
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

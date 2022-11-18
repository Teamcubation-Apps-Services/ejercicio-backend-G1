import Balance from "../../models/sequelize/balance.model.sequelize";

async function find(client: string) {
  return await Balance.findByPk(client);
}

async function create(balance: any) {
  return await Balance.create(balance);
}

async function update(client: string, balance: any) {
  return await Balance.update(balance, { where: { client } });
}

async function remove(client: string) {
  return await Balance.destroy({ where: { client } });
}

const balanceRepository = {
  find,
  create,
  update,
  remove,
};

export default balanceRepository;

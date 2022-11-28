import Balance from "../../models/sequelize/balance.model.sequelize";
import { SequelizeBalance } from "../../sequelizeTypes";

async function find(client: string, cryptocurrency: any) {
  return await Balance.findOne({ where: { client, cryptocurrency } });
}

async function create(balance: SequelizeBalance) {
  return await Balance.create(balance);
}

async function update(
  client: string,
  cryptocurrency: string,
  balance: SequelizeBalance
) {
  return await Balance.update(balance, { where: { client, cryptocurrency } });
}

async function remove(client: string, cryptocurrency: string) {
  return await Balance.destroy({ where: { client, cryptocurrency } });
}

const balanceRepository = {
  find,
  create,
  update,
  remove,
};

export default balanceRepository;

import Balance from "../../models/sequelize/balance.model.sequelize";
import { SequelizeBalance } from "../../sequelizeTypes";

async function find(client: string, crypto: any) {
  return await Balance.findOne({ where: { client, crypto } });
}

async function create(balance: SequelizeBalance) {
  return await Balance.create(balance);
}

async function update(
  client: string,
  crypto: string,
  balance: SequelizeBalance
) {
  return await Balance.update(balance, { where: { client, crypto } });
}

async function remove(client: string, crypto: string) {
  return await Balance.destroy({ where: { client, crypto } });
}

const balanceRepository = {
  find,
  create,
  update,
  remove,
};

export default balanceRepository;

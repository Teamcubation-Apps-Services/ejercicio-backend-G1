import Wallet from "../../models/sequelize/wallet.model.sequelize";
import { SequelizeWallet } from "../../sequelizeTypes";

async function find(name: string) {
  return await Wallet.findByPk(name);
}

async function create(wallet: SequelizeWallet) {
  return await Wallet.create(wallet);
}

async function update(name: string, wallet: SequelizeWallet) {
  return await Wallet.update(wallet, { where: { name } });
}

async function remove(name: string) {
  return await Wallet.destroy({ where: { name } });
}

const walletRepository = {
  find,
  create,
  update,
  remove,
};

export default walletRepository;

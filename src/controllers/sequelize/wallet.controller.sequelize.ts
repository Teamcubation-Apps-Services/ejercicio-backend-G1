import { Request, Response } from "express";
import walletRepository from "../../repository/sequelize/wallet.repository.sequelize";

async function getWallet(req: Request, res: Response) {
  const { name } = req.params;
  const wallet = await walletRepository.find(name);

  try {
    if (wallet) {
      res.status(200).json(wallet);
    } else {
      res.status(404).json({ message: "The wallet doesn't exist" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function createWallet(req: Request, res: Response) {
  const walletData = req.body;

  try {
    const existingWallet = await walletRepository.find(walletData.name);

    if (existingWallet) {
      res.status(403).json({ message: "Wallet already exists with that name" });
    } else {
      const newWallet = await walletRepository.create(walletData);
      if (newWallet) {
        res.status(201).json({ error: "Wallet succesfully created" });
      }
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function updateWallet(req: Request, res: Response) {
  const { name } = req.params;
  const walletData = req.body;

  try {
    const updatedID = await walletRepository.update(name, walletData);

    if (updatedID) {
      res.status(204).json({ message: "Wallet succesfully updated" });
    } else {
      res.status(404).json({ message: "Wallet doesn't exist with that name" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function deleteWallet(req: Request, res: Response) {
  const { name } = req.params;

  try {
    const deletedID = await walletRepository.remove(name);

    if (deletedID) {
      res.status(204).json({ message: "Wallet succesfully deleted" });
    } else {
      res.status(404).json({ message: "Wallet doesn't exist with that name" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

export { getWallet, createWallet, updateWallet, deleteWallet };

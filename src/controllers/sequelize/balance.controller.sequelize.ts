import { Request, Response } from "express";
import balanceRepository from "../../repository/sequelize/balance.repository.sequelize";

async function getBalance(req: Request, res: Response) {
  const { name, cryptocurrency } = req.params;
  const balance = await balanceRepository.find(name, cryptocurrency);

  try {
    if (balance) {
      res.status(200).json(balance);
    } else {
      res.status(404).json({ message: "The balance doesn't exist" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function createBalance(req: Request, res: Response) {
  const balanceData = req.body;

  try {
    const existingBalance = await balanceRepository.find(
      balanceData.client,
      balanceData.cryptocurrency)

    if (existingBalance) {
      res
        .status(403)
        .json({ message: "Balance already exists with that name" });
    } else {
      const newBalance = await balanceRepository.create(balanceData);
      if (newBalance) {
        res.status(201).json({ error: "Balance succesfully created" });
      }
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function updateBalance(req: Request, res: Response) {
  const { name, cryptocurrency } = req.params;
  const balanceData = req.body;

  try {
    const updatedID = await balanceRepository.update(name, cryptocurrency, balanceData);

    if (updatedID) {
      res.status(204).json({ message: "Balance succesfully updated" });
    } else {
      res.status(404).json({ message: "Balance doesn't exist with that name" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function deleteBalance(req: Request, res: Response) {
  const { name, cryptocurrency } = req.params;

  try {
    const deletedID = await balanceRepository.remove(name, cryptocurrency);

    if (deletedID) {
      res.status(204).json({ message: "Balance succesfully deleted" });
    } else {
      res.status(404).json({ message: "Balance doesn't exist with that name" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

export { getBalance, createBalance, updateBalance, deleteBalance };

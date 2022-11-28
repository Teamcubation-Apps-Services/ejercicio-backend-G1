import { Request, Response } from "express";
import movementRepository from "../../repository/sequelize/movement.repository.sequelize";
import clientRepository from "../../repository/sequelize/client.repository.sequelize";
import cryptocurrencyRepository from "../../repository/sequelize/cryptocurrency.repository.sequelize";

async function getMovement(req: Request, res: Response) {
  const { id } = req.params;
  const movement = await movementRepository.find(id);

  try {
    if (movement) {
      res.status(200).json(movement.dataValues);
    } else {
      res.status(404).json({ message: "Movement doesn't exist" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function createMovement(req: Request, res: Response) {
  const movementData = req.body;

  try {
    const sender = await clientRepository.find(movementData.from);
    const receiver = await clientRepository.find(movementData.to);
    const crypto = await cryptocurrencyRepository.find(
      movementData.cryptocurrency
    );

    if (!sender || !receiver || !crypto) {
      res.status(404).json({
        message: "Either the sender, receiver or cryptocurrency doesn't exist",
      });
    } else {
      const newMovement = await movementRepository.create(movementData);

      if (newMovement) {
        res.status(201).json({
          message: "Movement succesfully created",
          id: newMovement.dataValues.id,
        });
      }
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function updateMovement(req: Request, res: Response) {
  const { id } = req.params;
  const movementData = req.body;

  try {
    const [updatedID] = await movementRepository.update(id, movementData);

    if (updatedID) {
      res.status(204).json({ message: "Movement succesfully updated" });
    } else {
      res.status(404).json({ message: "Movement doesn't exist" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function deleteMovement(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const deletedID = await movementRepository.remove(id);

    if (deletedID) {
      res.status(204).json({ message: "Movement succesfully deleted" });
    } else {
      res.status(404).json({ message: "Movement doesn't exist" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

export { getMovement, createMovement, updateMovement, deleteMovement };

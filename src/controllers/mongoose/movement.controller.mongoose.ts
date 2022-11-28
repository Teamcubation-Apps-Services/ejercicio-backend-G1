import { Request, Response } from "express";
import movementRepository from "../../repository/mongoose/movement.repository.mongoose";

async function getMovement(req: Request, res: Response) {
  const { id } = req.params;
  const movement = await movementRepository.find(id);

  try {
    if (movement) {
      res.status(200).json(movement);
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
    const newMovement = await movementRepository.create(movementData);

    if (newMovement) {
      res.status(201).json({ message: "Movement succesfully created" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function updateMovement(req: Request, res: Response) {
  const { id } = req.params;
  const movementData = req.body;

  try {
    const { acknowledged, matchedCount, modifiedCount } =
      await movementRepository.update(id, movementData);

    if (!acknowledged || !matchedCount) {
      res
        .status(404)
        .json({ message: "Movement doesn't exist with that name" });
    } else if (modifiedCount) {
      res.status(204).json({ message: "Movement succesfully updated" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function deleteMovement(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const { deletedCount } = await movementRepository.remove(id);

    if (deletedCount) {
      res.status(204).json({ message: "Movement succesfully deleted" });
    } else {
      res.status(404).json({ message: "Movement doesn't exist" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

export { getMovement, createMovement, updateMovement, deleteMovement };

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
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

async function createMovement(req: Request, res: Response) {
  const movementData = req.body;

  try {
    const newMovement = await movementRepository.create(movementData);

    if (newMovement) {
      res.status(201).json({ message: "Movement succesfully created" });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

async function updateMovement(req: Request, res: Response) {
  const { id } = req.params;
  const movementData = req.body;

  try {
    const updatedID = await movementRepository.update(id, movementData);

    if (updatedID) {
      res.status(204).json({ message: "Movement succesfully updated" });
    } else {
      res.status(404).json({ message: "Movement doesn't exist" });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
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
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

export { getMovement, createMovement, updateMovement, deleteMovement };

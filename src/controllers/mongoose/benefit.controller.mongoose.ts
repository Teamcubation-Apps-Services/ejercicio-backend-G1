import { Request, Response } from "express";
import benefitRepository from "../../repository/mongoose/benefit.repository.mongoose";

async function getBenefit(req: Request, res: Response) {
  const { name } = req.params;
  const benefit = await benefitRepository.find(name);

  try {
    if (benefit) {
      res.status(200).json(benefit);
    } else {
      res.status(404).json({ message: "The benefit doesn't exist" });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

async function createBenefit(req: Request, res: Response) {
  const { benefitData } = req.body;

  try {
    const existingBenefit = await benefitRepository.find(benefitData.name);

    if (existingBenefit) {
      res
        .status(403)
        .json({ message: "Benefit already exists with that name" });
    } else {
      const newBenefit = await benefitRepository.create(benefitData);
      if (newBenefit) {
        res.status(201).json({ error: "Benefit succesfully created" });
      }
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

async function updateBenefit(req: Request, res: Response) {
  const { name } = req.params;
  const { benefitData } = req.body;

  try {
    const updatedID = await benefitRepository.update(name, benefitData);

    if (updatedID) {
      res.status(204).json({ message: "Benefit succesfully updated" });
    } else {
      res.status(404).json({ message: "Benefit doesn't exist with that name" });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

async function deleteBenefit(req: Request, res: Response) {
  const { name } = req.params;

  try {
    const deletedID = await benefitRepository.remove(name);

    if (deletedID) {
      res.status(204).json({ message: "Benefit succesfully deleted" });
    } else {
      res.status(404).json({ message: "Benefit doesn't exist with that name" });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

export { getBenefit, createBenefit, updateBenefit, deleteBenefit };

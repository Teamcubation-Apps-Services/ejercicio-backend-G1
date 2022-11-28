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
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function createBenefit(req: Request, res: Response) {
  const benefitData = req.body;

  try {
    const existingBenefit = await benefitRepository.find(benefitData.name);

    if (existingBenefit) {
      res
        .status(403)
        .json({ message: "Benefit already exists with that name" });
    } else {
      const newBenefit = await benefitRepository.create(benefitData);
      if (newBenefit) {
        res.status(201).json({ message: "Benefit succesfully created" });
      }
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function updateBenefit(req: Request, res: Response) {
  const { name } = req.params;
  const benefitData = req.body;

  try {
    const { acknowledged, matchedCount, modifiedCount } =
      await benefitRepository.update(name, benefitData);

    if (!acknowledged || !matchedCount) {
      res.status(404).json({ message: "Benefit doesn't exist with that name" });
    } else if (modifiedCount) {
      res.status(204).json({ message: "Benefit succesfully updated" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

async function deleteBenefit(req: Request, res: Response) {
  const { name } = req.params;

  try {
    const { deletedCount } = await benefitRepository.remove(name);

    if (deletedCount) {
      res.status(204).json({ message: "Benefit succesfully deleted" });
    } else {
      res.status(404).json({ message: "Benefit doesn't exist with that name" });
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

export { getBenefit, createBenefit, updateBenefit, deleteBenefit };

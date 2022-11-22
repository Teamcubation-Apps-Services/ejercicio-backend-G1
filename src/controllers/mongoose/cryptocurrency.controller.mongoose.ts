import { Request, Response } from "express";
import cryptocurrencyRepository from "../../repository/mongoose/cryptocurrency.repository.mongoose";

async function getCryptocurrency(req: Request, res: Response) {
  const { name } = req.params;
  const cryptocurrency = await cryptocurrencyRepository.find(name);

  try {
    if (cryptocurrency) {
      res.status(200).json(cryptocurrency);
    } else {
      res.status(404).json({ message: "The cryptocurrency doesn't exist" });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

async function createCryptocurrency(req: Request, res: Response) {
  const { cryptocurrencyData } = req.body;

  try {
    const existingCryptocurrency = await cryptocurrencyRepository.find(
      cryptocurrencyData.name
    );

    if (existingCryptocurrency) {
      res
        .status(403)
        .json({ message: "Cryptocurrency already exists with that name" });
    } else {
      const newCryptocurrency = await cryptocurrencyRepository.create(
        cryptocurrencyData
      );
      if (newCryptocurrency) {
        res.status(201).json({ error: "Cryptocurrency succesfully created" });
      }
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

async function updateCryptocurrency(req: Request, res: Response) {
  const { name } = req.params;
  const { cryptocurrencyData } = req.body;

  try {
    const updatedID = await cryptocurrencyRepository.update(
      name,
      cryptocurrencyData
    );

    if (updatedID) {
      res.status(204).json({ message: "Cryptocurrency succesfully updated" });
    } else {
      res
        .status(404)
        .json({ message: "Cryptocurrency doesn't exist with that name" });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

async function deleteCryptocurrency(req: Request, res: Response) {
  const { name } = req.params;

  try {
    const deletedID = await cryptocurrencyRepository.remove(name);

    if (deletedID) {
      res.status(204).json({ message: "Cryptocurrency succesfully deleted" });
    } else {
      res
        .status(404)
        .json({ message: "Cryptocurrency doesn't exist with that name" });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

export {
  getCryptocurrency,
  createCryptocurrency,
  updateCryptocurrency,
  deleteCryptocurrency,
};

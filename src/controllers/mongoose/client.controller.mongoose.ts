import { Request, Response } from "express";
import clientRepository from "../../repository/mongoose/client.repository.mongoose";

async function getClient(req: Request, res: Response) {
  const { name } = req.params;
  const client = await clientRepository.find(name);

  try {
    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).json({ message: "The client doesn't exist" });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

async function createClient(req: Request, res: Response) {
  const { clientData } = req.body;

  try {
    const existingClient = await clientRepository.find(clientData.name);

    if (existingClient) {
      res.status(403).json({ message: "Client already exists with that name" });
    } else {
      const newClient = await clientRepository.create(clientData);
      if (newClient) {
        res.status(201).json({ error: "Client succesfully created" });
      }
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

async function updateClient(req: Request, res: Response) {
  const { name } = req.params;
  const { clientData } = req.body;

  try {
    const updatedID = await clientRepository.update(name, clientData);

    if (updatedID) {
      res.status(204).json({ message: "Client succesfully updated" });
    } else {
      res.status(404).json({ message: "Client doesn't exist with that name" });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

async function deleteClient(req: Request, res: Response) {
  const { name } = req.params;

  try {
    const deletedID = await clientRepository.remove(name);

    if (deletedID) {
      res.status(204).json({ message: "Client succesfully deleted" });
    } else {
      res.status(404).json({ message: "Client doesn't exist with that name" });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error querying the database, try again" });
  }
}

export { getClient, createClient, updateClient, deleteClient };

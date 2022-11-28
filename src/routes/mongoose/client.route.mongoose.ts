import Router from "express";
import {
  getClient,
  createClient,
  updateClient,
  deleteClient,
} from "../../controllers/mongoose/client.controller.mongoose";

const clientMongoRoutes = Router();

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Client:
 *        type: object
 *        required:
 *          - name
 *          - age
 *          - email
 *        properties:
 *          name:
 *            type: string
 *            description: Client name
 *          lastName:
 *            type: string
 *            description: Client lastname
 *          dni:
 *            type: string
 *            description: Client dni
 *          movements:
 *            type: Array<MongoMovement>
 *            description: Client movements
 *        example:
 *          name: Carlo
 *          lastName: Magno
 *          dni: 44444444
 *          movements: [<MongoMovement>, <MongoMovement>, ...]
 */

/**
 * @swagger
 * /mongo/client/get/{name}:
 *  get:
 *    summary: Searches for an existing client by its name
 *    tags: [Client]
 *    parameters:
 *      - in: path
 *        name: name
 *        schema:
 *          type: string
 *        required: true
 *        description: The name of a requested client
 *    responses:
 *      200:
 *        description: Client found! Return client
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             $ref: '#/components/schemas/Client'
 *      404:
 *        description: Client not found/does not exist
 */
clientMongoRoutes.get("/get/:name", getClient);

/**
 * @swagger
 * /mongo/client/create:
 *  post:
 *    summary: Creates a new client
 *    tags: [Client]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Client'
 *    responses:
 *      201:
 *        description: Client succesfully created
 *      403:
 *        description: Client already exists with that name
 *
 */
clientMongoRoutes.post("/create", createClient);

/**
 * @swagger
 * /mongo/client/update/{name}:
 *  patch:
 *    summary: Updates a client name
 *    tags: [Client]
 *    parameters:
 *      - in: path
 *        name: name
 *        schema:
 *          type: string
 *        required: true
 *        description: The name of a requested client for update
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            name: string
 *            description: Client name
 *          example:
 *            name: Carlo
 *    responses:
 *      204:
 *        description: Client found! Client succesfully updated
 *      404:
 *        description: Client not found/does does not exist
 *
 */
clientMongoRoutes.patch("/update/:name", updateClient);

/**
 * @swagger
 * /mongo/client/delete/{name}:
 *  delete:
 *    summary: Deletes an existing client by its name
 *    tags: [Client]
 *    parameters:
 *      - in: path
 *        name: name
 *        schema:
 *          type: string
 *        required: true
 *        description: The name of a requested client to delete
 *    responses:
 *      204:
 *        description: Client deleted!
 *      404:
 *        description: Client not found/does not exist
 */
clientMongoRoutes.delete("/delete/:name", deleteClient);

export default clientMongoRoutes;

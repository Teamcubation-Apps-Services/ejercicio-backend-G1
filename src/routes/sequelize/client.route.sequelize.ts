import Router from "express";
import {
  getClient,
  createClient,
  updateClient,
  deleteClient,
} from "../../controllers/sequelize/client.controller.sequelize";

const clientSequelizeRoutes = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    SequelizeClient:
 *      type: object
 *      required:
 *        - name
 *        - lastName
 *        - email
 *        - dni
 *        - phone
 *      properties:
 *        name:
 *          type: string
 *          description: The client's name
 *        lastName:
 *          type: string
 *          description: The client's surname
 *        email:
 *          type: string
 *          description: The client's email
 *        dni:
 *          type: number
 *          description: The client's personal ID
 *        phone:
 *          type: number
 *          description: The client's phone
 */

/**
 * @swagger
 * /sequelize/client/get/{name}:
 *  get:
 *    summary: Finds a clienv by its name
 *    tags: [SequelizeClient]
 *    parameters:
 *      - in: path
 *        name: name
 *        schema:
 *         type: string
 *        required: true
 *        description: The client's name
 *    responses:
 *      200:
 *        description: Client found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/SequelizeClient'
 *      404:
 *        description: Client not found
 */
clientSequelizeRoutes.get("/get/:name", getClient);

/**
 * @swagger
 * /sequelize/client/create:
 *  post:
 *    summary: Creates a new client
 *    tags: [SequelizeClient]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/SequelizeClient'
 *    responses:
 *      201:
 *        description: Client succesfully created
 */
clientSequelizeRoutes.post("/create", createClient);

/**
 * @swagger
 * /sequelize/client/update/{name}:
 *  patch:
 *    summary: Updates a client
 *    tags: [SequelizeClient]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/SequelizeClient'
 *    responses:
 *      204:
 *        description: client succesfully updated
 *      404:
 *        description: client doesn't exist
 */
clientSequelizeRoutes.patch("/update/:name", updateClient);

/**
 * @swagger
 * /sequelize/client/delete/{name}:
 *  delete:
 *    summary: Deletes a client by its name
 *    tags: [SequelizeClient]
 *    parameters:
 *      - in: path
 *        name: name
 *        schema:
 *         type: string
 *        required: true
 *        description: The client's name
 *    responses:
 *      204:
 *        description: Client succesfully deleted
 *      404:
 *        description: Client doesn't exist
 */

clientSequelizeRoutes.delete("/delete/:name", deleteClient);

export default clientSequelizeRoutes;

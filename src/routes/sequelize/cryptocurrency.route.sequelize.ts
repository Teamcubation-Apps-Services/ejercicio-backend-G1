import Router from "express";
import {
  getCryptocurrency,
  createCryptocurrency,
  updateCryptocurrency,
  deleteCryptocurrency,
} from "../../controllers/sequelize/cryptocurrency.controller.sequelize";

const cryptocurrencySequelizeRoutes = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Cryptocurrency:
 *      type: object
 *      required:
 *        - name
 *        - price
 *        - anualRevenue
 *        - description
 *      properties:
 *        name:
 *          type: string
 *          description: The cryptocurrency's name
 *        price:
 *          type: number
 *          description: The cryptocurrency's price
 *        anualRevenue:
 *          type: number
 *          description: The cryptocurrency's anual revenue
 *        description:
 *          type: string
 *          description: The cryptocurrency's description
 */

/**
 * @swagger
 * /sequelize/cryptocurrency/get/{name}:
 *  get:
 *    summary: Finds a cryptocurrency by its name
 *    tags: [Cryptocurrency]
 *    parameters:
 *      - in: path
 *        name: name
 *        schema:
 *         type: string
 *        required: true
 *        description: The cryptocurrency's name
 *    responses:
 *      200:
 *        description: Cryptocurrency found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Cryptocurrency'
 *      404:
 *        description: Cryptocurrency not found
 */
cryptocurrencySequelizeRoutes.get("/get/:name", getCryptocurrency);

/**
 * @swagger
 * /sequelize/cryptocurrency/create:
 *  post:
 *    summary: Creates a new cryptocurrency
 *    tags: [Cryptocurrency]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Cryptocurrency'
 *    responses:
 *      201:
 *        description: Cryptocurrency succesfully created
 */
cryptocurrencySequelizeRoutes.post("/create", createCryptocurrency);

/**
 * @swagger
 * /sequelize/cryptocurrency/update/{name}:
 *  patch:
 *    summary: Updates a cryptocurrency
 *    tags: [Cryptocurrency]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Cryptocurrency'
 *    responses:
 *      204:
 *        description: Cryptocurrency succesfully updated
 *      404:
 *        description: Cryptocurrency doesn't exist
 */
cryptocurrencySequelizeRoutes.patch("/update/:name", updateCryptocurrency);

/**
 * @swagger
 * /sequelize/cryptocurrency/delete/{name}:
 *  delete:
 *    summary: Deletes a cryptocurrency by its name
 *    tags: [Cryptocurrency]
 *    parameters:
 *      - in: path
 *        name: name
 *        schema:
 *         type: string
 *        required: true
 *        description: The cryptocurrency's name
 *    responses:
 *      204:
 *        description: Cryptocurrency succesfully deleted
 *      404:
 *        description: Cryptocurrency doesn't exist
 */

cryptocurrencySequelizeRoutes.delete("/delete/:name", deleteCryptocurrency);

export default cryptocurrencySequelizeRoutes;

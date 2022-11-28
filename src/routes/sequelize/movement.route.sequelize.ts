import Router from "express";
import {
  getMovement,
  createMovement,
  updateMovement,
  deleteMovement,
} from "../../controllers/sequelize/movement.controller.sequelize";

const movementSequelizeRoutes = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Movement:
 *      type: object
 *      required:
 *        - from
 *        - type
 *        - amount
 *        - fee
 *        - to
 *        - cryptocurrency
 *      properties:
 *        from:
 *          type: string
 *          description: The sender address
 *        type:
 *          type: string
 *          description: Type of movement (buy, sell, transfer)
 *        amount:
 *          type: number
 *          description: Amount of crypto transfered
 *        fee:
 *          type: number
 *          description: Transaction's fee
 *        to:
 *          type: string
 *          description: The receiver address
 *        cryptocurrency:
 *          type: string
 *          description: The name of the crypto used
 */

/**
 * @swagger
 * /sequelize/movement/get/{id}:
 *  get:
 *    summary: Finds a movement by its ID
 *    tags: [Movement]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: string
 *        required: true
 *        description: The movement's ID
 *    responses:
 *      200:
 *        description: Movement found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Movement'
 *      404:
 *        description: Movement not found
 */
movementSequelizeRoutes.get("/get/:id", getMovement);

/**
 * @swagger
 * /sequelize/movement/create:
 *  post:
 *    summary: Creates a new movement
 *    tags: [Movement]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Movement'
 *    responses:
 *      201:
 *        description: Movement succesfully created
 */
movementSequelizeRoutes.post("/create", createMovement);

/**
 * @swagger
 * /sequelize/movement/update/{id}:
 *  patch:
 *    summary: Updates a document
 *    tags: [Movement]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Movement'
 *    responses:
 *      204:
 *        description: Movement succesfully updated
 *      404:
 *        description: Movement doesn't exist
 */
movementSequelizeRoutes.patch("/update/:id", updateMovement);

/**
 * @swagger
 * /sequelize/movement/delete/{id}:
 *  delete:
 *    summary: Deletes a movement by its ID
 *    tags: [Movement]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: string
 *        required: true
 *        description: The movement's ID
 *    responses:
 *      204:
 *        description: Movement succesfully deleted
 *      404:
 *        description: Movement doesn't exist
 */
movementSequelizeRoutes.delete("/delete/:id", deleteMovement);

export default movementSequelizeRoutes;

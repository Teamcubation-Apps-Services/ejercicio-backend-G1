import Router from "express";
import {
  getBalance,
  createBalance,
  updateBalance,
  deleteBalance,
} from "../../controllers/sequelize/balance.controller.sequelize";

/**
 * @swagger
 * components:
 *  schemas:
 *    Balance:
 *      type: object
 *      properties:
 *        client:
 *          type: string
 *          description: the client name
 *        cryptocurrency:
 *          type: string
 *          description: the cryptocurrency
 *        amount:
 *          type: string
 *          description: the amount of the balance
 *      required:
 *        - client
 *        - cryptocurrency
 *        - amount
 *      example:
 *        name: Alan
 *        cryptocurrency: Dogecoin
 *        amount: 103483
 */

const balanceSequelizeRoutes = Router();


/**
 * @swagger
 * /sequelize/balance/get/{client}/{cryptocurrency}:
 *  get:
 *    summary: return a balance with the selected client and cryptocurrency
 *    parameters:
 *      - in: path
 *        name: client
 *        schema:
 *          type: string
 *        required: true
 *      - in: path
 *        name: cryptocurrency
 *        schema:
 *          type: string
 *        required: true
 *    tags: [Balance]
 *    responses:
 *      200: Balance created!
 */

balanceSequelizeRoutes.get("/get/:client/:cryptocurrency", getBalance);


/**
 * @swagger
 * /sequelize/balance/create/{client}:
 *  post:
 *    summary: creates a new balance, the client and cryptocurrency MUST already exist on theri respective tables
 *    tags: [Balance]
 *    parameters:
 *      - in: path
 *        name: client
 *        schema:
 *          type: string
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schemas/Balance'
 *    responses:
 *      200: Balance created!
 */

balanceSequelizeRoutes.post("/create/:client", createBalance);

/**
 * @swagger
 * /sequelize/balance/update/{client}/{cryptocurrency}:
 *  patch:
 *    summary: updates the balance
 *    tags: [Balance]
 *    parameters:
 *      - in: path
 *        name: client
 *        schema:
 *          type: string
 *        required: true
 *      - in: path
 *        name: client
 *        schema:
 *          type: string
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schemas/Balance'
 *    responses:
 *      200: Balance updated!
 */


balanceSequelizeRoutes.patch("/update/:client/:cryptocurrency", updateBalance);


/**
 * @swagger
 * /sequelize/balance/delete/{client}/{cryptocurrency}:
 *  delete:
 *    summary: delete the selected balance
 *    parameters:
 *      - in: path
 *        name: client
 *        schema:
 *          type: string
 *        required: true
 *      - in: path
 *        name: cryptocurrency
 *        schema:
 *          type: string
 *        required: true
 *    tags: [Balance]
 *    responses:
 *      200: Balance deleted!
 */


balanceSequelizeRoutes.delete("/delete/:client/:cryptocurrency", deleteBalance);

export default balanceSequelizeRoutes;

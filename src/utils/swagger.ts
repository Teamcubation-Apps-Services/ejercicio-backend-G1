const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const path = require("path");

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mongo and Postgres API endpoints",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
    ],
  },
  apis: [
    `${path.join(__dirname, "../routes/mongoose/*.ts")}`,
    `${path.join(__dirname, "../routes/sequelize/*.ts")}`,
  ],
};

const swaggerServe = swaggerUI.serve;
const swaggerConf = swaggerUI.setup(swaggerJsDoc(swaggerSpec));

export { swaggerServe, swaggerConf };

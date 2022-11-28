import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { app } from "../../../src/index";
import clientRepository from "../../../src/repository/sequelize/client.repository.sequelize";
import cryptocurrencyRepository from "../../../src/repository/sequelize/cryptocurrency.repository.sequelize";
import movementRepository from "../../../src/repository/sequelize/movement.repository.sequelize";
import randomString from "../../../src/utils/randomString";

chai.use(chaiHttp);
const chaiAppServer = chai.request(app).keepOpen();

const user1 = {
  name: randomString(10),
  lastName: randomString(10),
  email: `${randomString(10)}@hotmail.com`,
  dni: Math.floor(Math.random() * 15),
  phone: 42019999,
};

const user2 = {
  name: randomString(10),
  lastName: randomString(10),
  email: `${randomString(10)}@hotmail.com`,
  dni: 87654321,
  phone: 42018888,
};

const cryptocurrency = {
  name: randomString(10),
  price: 150,
  anualRevenue: 35,
  description: randomString(10),
};

const movementForExistingSenderReceiverAndCrypto = {
  from: user1.name,
  type: randomString(10),
  amount: 137,
  fee: 12,
  to: user2.name,
  cryptocurrency: cryptocurrency.name,
};

const movementForNonExistingSender = {
  from: randomString(10),
  type: "payment",
  amount: 137,
  fee: 12,
  to: user2.name,
  cryptocurrency: cryptocurrency.name,
};

const movementForNonExistingReceiver = {
  from: user1.name,
  type: "payment",
  amount: 137,
  fee: 12,
  to: randomString(10),
  cryptocurrency: cryptocurrency.name,
};

const movementForNonExistingCrypto = {
  from: user1.name,
  type: "payment",
  amount: 137,
  fee: 12,
  to: user2.name,
  cryptocurrency: randomString(10),
};

describe("movement endpoints", () => {
  const getURL = (id: string) => `/sequelize/movement/get/${id}`;
  const patchURL = (id: string) => `/sequelize/movement/update/${id}`;
  const deleteURL = (id: string) => `/sequelize/movement/delete/${id}`;
  const postURL = "/sequelize/movement/create";

  let newMovementID = "";

  before("creates movement and its dependencies", async () => {
    await clientRepository.create(user1);
    await clientRepository.create(user2);
    await cryptocurrencyRepository.create(cryptocurrency);
    const newMovement = await movementRepository.create(
      movementForExistingSenderReceiverAndCrypto
    );
    newMovementID = newMovement.dataValues.id;
  });

  after("deletes movement and its dependencies", async () => {
    await clientRepository.remove(user1.name);
    await clientRepository.remove(user2.name);
    await cryptocurrencyRepository.remove(cryptocurrency.name);
    await movementRepository.remove(newMovementID);
  });

  describe("Create", () => {
    it("should create a movement for existing sender, receiver and crypto", (done) => {
      chaiAppServer
        .post(postURL)
        .send(movementForExistingSenderReceiverAndCrypto)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          done(err);
        });
    });

    it("should'n create a movement for sender user that doesn't exist", (done) => {
      chaiAppServer
        .post(postURL)
        .send(movementForNonExistingSender)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done(err);
        });
    });

    it("shouldn't create a movement for receiver user that doesn't exist", (done) => {
      chaiAppServer
        .post(postURL)
        .send(movementForNonExistingReceiver)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done(err);
        });
    });

    it("shouldn't create a movement for a crypto that doesn't exist", (done) => {
      chaiAppServer
        .post(postURL)
        .send(movementForNonExistingCrypto)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done(err);
        });
    });
  });

  describe("Find", () => {
    it("should find an existing movement", (done) => {
      chaiAppServer.get(getURL(newMovementID)).end((err, res) => {
        expect(res.body.id).to.equal(newMovementID);
        done(err);
      });
    });

    it("shouldn't find a movement whose id doesn't exist", (done) => {
      chaiAppServer.get(getURL("130")).end((err, res) => {
        expect(res.status).to.equal(404);
        done(err);
      });
    });
  });

  describe("Update", () => {
    it("should update an existing movement", (done) => {
      chaiAppServer
        .patch(patchURL(newMovementID))
        .send({ amount: 200 })
        .end((err, res) => {
          expect(res.status).to.equal(204);
          done(err);
        });
    });

    it("shouldn't update a movement whose id doesn't exist", (done) => {
      chaiAppServer
        .patch(patchURL("187"))
        .send({ type: randomString(5) })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done(err);
        });
    });

    it("shouldn't update a movement when passing a non existing property", (done) => {
      chaiAppServer
        .patch(patchURL(newMovementID))
        .send({ wrongProp: 100 })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done(err);
        });
    });

    describe("Delete", () => {
      it("should delete an existing movement", (done) => {
        chaiAppServer.delete(deleteURL(newMovementID)).end((err, res) => {
          expect(res.status).to.equal(204);
          done(err);
        });
      });

      it("shouldn't delete a non existing movement", (done) => {
        chaiAppServer.delete(deleteURL("1734")).end((err, res) => {
          expect(res.status).to.equal(404);
          done(err);
        });
      });
    });
  });
});

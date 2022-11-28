import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { app } from "../../../src/index";
import randomNumber from "../../../src/utils/randomNumber";
import randomString from "../../../src/utils/randomString";
import cryptocurrencyRepository from "../../../src/repository/sequelize/cryptocurrency.repository.sequelize";
import clientRepository from "../../../src/repository/sequelize/client.repository.sequelize";

chai.use(chaiHttp);

const user1 = {
  name: randomString(10),
  lastName: randomString(10),
  email: `${randomString(10)}@hotmail.com`,
  dni: randomNumber(5),
  phone: randomNumber(5),
};

const cryptocurrency = {
  name: randomString(30),
  price: randomNumber(5),
  anualRevenue: randomNumber(5),
  description: randomString(30),
};

const balanceTesting = {
  client: user1.name,
  amount: randomNumber(9),
  cryptocurrency: cryptocurrency.name,
};
const balanceTesting2 = {
  client: user1.name,
  amount: randomNumber(9),
  cryptocurrency: cryptocurrency.name,
};

const balanceWithInvalidName = {
  client: randomString(10),
  amount: randomNumber(9),
  cryptocurrency: cryptocurrency.name,
};

const balanceWithInvalidCryptocurrency = {
  client: user1.name,
  amount: randomNumber(9),
  cryptocurrency: randomNumber(9),
};

describe("balance endpoints", () => {
  before("creates client and cryptocurrency", async () => {
    await clientRepository.create(user1);
    await cryptocurrencyRepository.create(cryptocurrency);
  });

  after("deletes client and cryptocurrency", async () => {
    await clientRepository.remove(user1.name);
    await cryptocurrencyRepository.remove(cryptocurrency.name);
  });

  describe(`sequelize/balance/create/${balanceTesting.client}`, () => {
    it("should create a balance if not exists, and save it to database", (done) => {
      chai
        .request(app)
        .post(`/sequelize/balance/create/${balanceTesting.client}`)
        .set("content-type", "application/json")
        .send(balanceTesting)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          done(err);
        });
    });
    it("should not create a balance if it exists", (done) => {
      chai
        .request(app)
        .post(`/sequelize/balance/create/${balanceTesting.client}`)
        .set("content-type", "application/json")
        .send(balanceTesting)
        .end((err, res) => {
          expect(res.status).to.equal(403);
          done(err);
        });
    });

    it("should not create a balance with invalid client", (done) => {
      chai
        .request(app)
        .post(`/sequelize/balance/create/${balanceTesting.client}`)
        .set("content-type", "application/json")
        .send(balanceWithInvalidName)
        .end((err, res) => {
          expect(res.status).to.equal(500);
          done(err);
        });
    });

    it("should not create a balance with invalid cryptocurrency", (done) => {
      chai
        .request(app)
        .post(`/sequelize/balance/create/${balanceTesting.client}`)
        .set("content-type", "application/json")
        .send(balanceWithInvalidCryptocurrency)
        .end((err, res) => {
          expect(res.status).to.equal(500);
          done(err);
        });
    });
  });

  describe(`/sequelize/balance/get/${balanceTesting.client}/${balanceTesting.cryptocurrency}`, () => {
    it("should show a balance if exists", (done) => {
      chai
        .request(app)
        .get(`/sequelize/balance/get/${balanceTesting.client}/${balanceTesting.cryptocurrency}`)
        .set("content-type", "application/json")
        .send(balanceTesting)
        .end((err, res) => {
          const { client, amount, cryptocurrency } = res.body;
          const requestedBalance = {
            client,
            amount,
            cryptocurrency
          };
          expect(requestedBalance).to.be.deep.equal(balanceTesting);
          done(err);
        });
    });

    it("shouldn't return a balance if the client doesn't exist", (done) => {
      chai
        .request(app)
        .get(`/sequelize/balance/get/${randomString(39)}/${balanceTesting.cryptocurrency}`)
        .set("content-type", "application/json")
        .send(balanceTesting)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done(err);
        });
    });
  });

  describe(`/sequelize/balance/update/${balanceTesting.client}/${balanceTesting.cryptocurrency}`, () => {
    it("should update a balance if exists", (done) => {
      chai
        .request(app)
        .patch(`/sequelize/balance/update/${balanceTesting.client}/${balanceTesting.cryptocurrency}`)
        .set("content-type", "application/json")
        .send(balanceTesting2)
        .end((err, res) => {
          expect(res.status).to.equal(204);
          done(err);
        });
    });
  });

  describe(`/sequelize/balance/get/${balanceTesting.client}/${balanceTesting.cryptocurrency}`, () => {
    it("should show the updated balance", (done) => {
      chai
        .request(app)
        .get(`/sequelize/balance/get/${balanceTesting.client}/${balanceTesting.cryptocurrency}`)
        .set("content-type", "application/json")
        .send(balanceTesting)
        .end((err, res) => {
          const { client, amount, cryptocurrency } = res.body;
          const requestedBalance = {
            client,
            amount,
            cryptocurrency,
          };
          expect(requestedBalance).to.be.deep.equal(balanceTesting2);
          done(err);
        });
    });
  });

  describe(`/sequelize/balance/delete/${balanceTesting.client}/${randomString(
    8
  )}`, () => {
    it("should not delete balance if not exists", (done) => {
      chai
        .request(app)
        .delete(`/sequelize/balance/delete/${balanceTesting.client}/${randomString(8)}`)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done(err);
        });
    });

    it("should delete balance if exists", (done) => {
      chai
        .request(app)
        .delete(`/sequelize/balance/delete/${balanceTesting.client}/${balanceTesting.cryptocurrency}`)
        .end((err, res) => {
          expect(res.status).to.equal(204);
          done(err);
        });
    });

    it("should not delete balance if not exists", (done) => {
      chai
        .request(app)
        .delete(`/sequelize/balance/delete/${balanceTesting.client}/${balanceTesting.cryptocurrency}`)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done(err);
        });
    });
  });
});

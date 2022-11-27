import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { app } from "../../../src/index";
import randomString from "../../../src/utils/randomString";

const clientV1 = {
  name: randomString(50),
  lastName: "Perez",
  dni: "1",
  movements: [],
};

const clientV2 = { ...clientV1 };
clientV2.name = randomString(50);

chai.use(chaiHttp);
const chaiAppServer = chai.request(app).keepOpen();

describe("mongo/client/create", () => {
  it("should create a client if not exists, and save it to database", (done) => {
    chaiAppServer
      .post("/mongo/client/create")
      .set("content-type", "application/json")
      .send(clientV1)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });

  it("should NOT create a client if it exists", (done) => {
    chaiAppServer
      .post("/mongo/client/create")
      .set("content-type", "application/json")
      .send(clientV1)
      .end((err, res) => {
        expect(res.status).to.equal(403);
        done(err);
      });
  });
});

describe("mongo/client/get/:name", () => {
  it("should return a client", (done) => {
    chaiAppServer.get(`/mongo/client/get/${clientV1.name}`).end((err, res) => {
      const { _id, __v, ...requestedClient } = res.body;

      expect(res.status).to.equal(200);
      expect(requestedClient).to.be.deep.equal(clientV1);
      done(err);
    });
  });

  it("should throw 404 status if requested client does not exist", (done) => {
    chaiAppServer
      .get(`/mongo/client/get/${randomString(50)}`)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
  404;
});

describe("mongo/client/update/:name", () => {
  it("should update a client", (done) => {
    chaiAppServer
      .patch(`/mongo/client/update/${clientV1.name}`)
      .set("content-type", "application/json")
      .send({ name: clientV2.name })
      .end((err, res) => {
        expect(res.status).to.equal(204);
        done(err);
      });
  });
  it("should throw 404 status if requested client does not exist", (done) => {
    chaiAppServer
      .patch(`/mongo/client/update/${randomString(30)}`)
      .set("content-type", "application/json")
      .send({ name: randomString(50) })
      .end((err, res) => {
        expect(res.status).to.equal(404);
        console.log(err);
        done();
      });
  });
});

describe("mongo/client/delete/:name", () => {
  it("should delete a client", (done) => {
    chaiAppServer
      .delete(`/mongo/client/delete/${clientV2.name}`)
      .end((err, res) => {
        expect(res.status).to.equal(204);
        done();
      });
  });

  it("should throw 404 status if requested client does not exist", (done) => {
    chaiAppServer
      .delete(`/mongo/client/delete/${clientV2.name}`)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done(err);
      });
  });
});

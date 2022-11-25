import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { ClientRequest } from "http";
import { app } from "../../../src/index";

chai.use(chaiHttp);

const clientExample = {
  name: "juan",
  lastName: "Perez",
  dni: 1,
  movements: [],
};

const randomName = "peppa";

const clientExampleV2 = {
  name: "juan",
  lastName: "lopez",
  dni: 1,
  movements: [],
};

// Create client
describe("mongo/client/create", () => {
  it("should create a client if not exists, and save it to database", (done) => {
    chai
      .request(app)
      .post("/mongo/client/create")
      .set("content-type", "application/json")
      .send(clientExample)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });
  // Now clientExample exists in mongoDB Atlas database

  it("should NOT create a client if it exists", (done) => {
    chai
      .request(app)
      .post("/mongo/client/create")
      .set("content-type", "application/json")
      .send(clientExample)
      .end((err, res) => {
        expect(res.status).to.equal(403);
        done();
      });
  });
});

// Get client
describe("mongo/client/get/:name", () => {
  it("should return a client", (done) => {
    chai
      .request(app)
      .get(`/mongo/client/get/${clientExample.name}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it("should throw 404 status if requested client does not exist", (done) => {
    chai
      .request(app)
      .get(`/mongo/client/get/${randomName}}`)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
  404;
});

// // Update client
// // TODO: revisar tests de update. Hay algo mal en el controlador? cómo completar el body de un patch??

// describe("mongo/client/update/:name", () => {
//   it("should update a client", (done) => {
//     chai
//       .request(app)
//       .patch(`/mongo/client/update/${clientExample.name}`)
//       .set("content-type", "application/json")
//       .send(clientExampleV2.lastName)
//       .end((err, res) => {
//         expect(res.status).to.equal(204);
//         done();
//       });
//   });

//   it("should throw 404 status if requested client does not exist", (done) => {
//     chai
//       .request(app)
//       .patch(`/mongo/client/update/${randomName}`)
//       .set("content-type", "application/json")
//       .send(clientExampleV2)
//       .end((err, res) => {
//         expect(res.status).to.equal(404);
//         console.log(err);
//         done();
//       });
//   });
//   404;
// });

// Delete client
describe("mongo/client/delete/:name", () => {
  it("should delete a client", (done) => {
    chai
      .request(app)
      .delete(`/mongo/client/delete/${clientExample.name}`)
      .end((err, res) => {
        expect(res.status).to.equal(204);
        done();
      });
  });
  // clientExample removed from mongoDB Atlas database

  // it("should throw 404 status if requested client does not exist", (done) => {
  //   chai
  //     .request(app)
  //     .delete(`/mongo/client/delete/${clientExample.name}`)
  //     .end((err, res) => {
  //       expect(res.status).to.equal(404);
  //       done();
  //     });
  // });
});

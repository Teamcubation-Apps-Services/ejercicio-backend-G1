import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dni: {
    type: String,
  },
  movimientos: {
    type: Array,
    default: [],
  },
});

const Client = mongoose.model("Client", schema);

export default Client;

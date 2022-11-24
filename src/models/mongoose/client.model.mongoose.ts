import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
  movimientos: {
    type: Array,
    default: [],
    required: true,
  },
});

const Client = mongoose.model("Client", schema);

export default Client;

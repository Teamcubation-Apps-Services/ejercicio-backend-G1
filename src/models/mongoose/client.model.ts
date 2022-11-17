import { Schema } from "mongoose";

const Client = new Schema({
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

export default Client;

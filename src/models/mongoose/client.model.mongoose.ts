import mongoose from "mongoose";
import { MongoMovement } from "../../mongoTypes";
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
  movements: {
    type: Array<MongoMovement>,
    default: [],
    required: true,
  },
});

const Client = mongoose.model("Client", schema);

export default Client;

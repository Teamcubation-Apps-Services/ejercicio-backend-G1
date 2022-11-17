import { Schema } from "mongoose";

const Movement = new Schema({
  cryptocurrency: {
    type: String,
  },
  movementType: {
    type: String,
  },
  amount: {
    type: Number,
  },
  date: {
    type: Date,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
});

export default Movement;

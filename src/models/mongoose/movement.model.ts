import mongoose from "mongoose";

const schema = new mongoose.Schema({
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

const Movement = mongoose.model("Movement", schema);

export default Movement;

import mongoose from "mongoose";

const schema = new mongoose.Schema({
  cryptocurrency: {
    type: String,
    required: true,
  },
  movementType: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});

const Movement = mongoose.model("Movement", schema);

export default Movement;

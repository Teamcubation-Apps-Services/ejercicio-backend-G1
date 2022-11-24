import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
  maxRefund: {
    type: Number,
    required: true,
  },
  vigency: {
    type: String,
    required: true,
  },
});

const Benefit = mongoose.model("Benefit", schema);

export default Benefit;

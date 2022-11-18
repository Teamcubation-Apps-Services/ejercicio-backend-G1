import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  discountPercentage: {
    type: Number,
  },
  maxRefund: {
    type: Number,
  },
  vigency: {
    type: String,
  },
});

const Benefit = mongoose.model("Benefit", schema);

export default Benefit;

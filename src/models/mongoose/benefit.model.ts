import { Schema } from "mongoose";

const Benefit = new Schema({
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

export default Benefit;

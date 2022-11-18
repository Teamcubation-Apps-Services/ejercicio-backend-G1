import { Schema } from "mongoose";

const Cryptocurrency = new Schema({
  name: {
    type: String,
  },
  referencePrice: {
    type: Number,
  },
  description: {
    type: String,
  },
  anualReturns: {
    type: Number,
  },
});

export default Cryptocurrency;

import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  referencePrice: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  anualReturns: {
    type: Number,
    required: true,
  },
});

const Cryptocurrency = mongoose.model("Cryptocurrency", schema);

export default Cryptocurrency;

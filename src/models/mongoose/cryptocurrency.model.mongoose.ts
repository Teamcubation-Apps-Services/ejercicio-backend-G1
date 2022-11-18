import mongoose from "mongoose";

const schema = new mongoose.Schema({
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

const Cryptocurrency = mongoose.model("Cryptocurrency", schema);

export default Cryptocurrency;

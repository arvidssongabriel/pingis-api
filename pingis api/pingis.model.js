const mongoose = require("mongoose");

const pingisSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
      required: true,
   },

   description: {
      type: String,
      required: true,
   },

   Image: {
      type: String,
      required: false,
   },
});

const Pingis = mongoose.model("Pingis", pingisSchema);

module.exports = Pingis;

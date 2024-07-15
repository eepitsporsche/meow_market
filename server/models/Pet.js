const mongoose = require("mongoose");

const { Schema } = mongoose;

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  breed: {
    type: String,
    required: true,
    unique: true,
  },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;

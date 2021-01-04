const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: [true, "Please enter food name"],
  },
  foodType: {
    type: String,
    required: [true, "Please enter food type"],
  },
  daysSinceIAte: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("food", foodSchema);

const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Show", "Hide"],
    default: "Show",
  },
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;

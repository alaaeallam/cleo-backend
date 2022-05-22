const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Show", "Hide"],
    default: "Show",
  },
});

const Brand = mongoose.models.Brand || mongoose.model("Brand", brandSchema);

module.exports = Brand;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: false,
    },
    address: {
      type: String,
      require: false,
    },
    country: {
      type: String,
      require: false,
    },
    city: {
      type: String,
      require: false,
    },
    phone: {
      type: String,
      require: false,
    },
    password: {
      type: String,
      require: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;

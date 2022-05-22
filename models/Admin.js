const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
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
    role: {
      type: String,
      required: false,
    },
    joiningData: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

module.exports = Admin;

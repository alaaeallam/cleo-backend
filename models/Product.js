const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: false,
    },
    unit: {
      type: String,
      required: false,
    },
    sub: {
      type: String,
      required: false,
    },
    children: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    originalPrice: {
      type: Number,
      required: false,
    },
    price: {
      type: Number,
      required: false,
      default: 0,
    },
    discount: {
      type: Number,
      required: false,
      default: 0,
    },
    quantity: {
      type: Number,
      required: false,
    },
    sold: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    brand: {
      type: String,
      required: false,
    },
    tag: [String],
    flashSale: {
      type: Boolean,
      required: false,
      default: false,
    },
    status: {
      type: String,
      default: "Show",
      enum: ["Show", "Hide"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

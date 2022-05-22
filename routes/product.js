const express = require("express");
const router = express.Router();

const {
  addProduct,
  addAllProducts,
  getProductById,
  getShowingProducts,
  getDiscountedProducts,
  getAllProducts,
  getStockOutProducts,
  getProductBySlug,
  updateProduct,
  updateStatus,
  deleteProduct,
} = require("../controllers/Product");

router.post("/add", addProduct);

router.post("/all", addAllProducts);

router.post("/:id", getProductById);

router.get("/show", getShowingProducts);

router.get("/discount", getDiscountedProducts);

router.get("/", getAllProducts);

router.get("/stock-out", getStockOutProducts);

router.get("/:slug", getProductBySlug);

router.put("/:id", updateProduct);

router.put("/status/:id", updateStatus);

router.delete("/:id", deleteProduct);

module.exports = router;

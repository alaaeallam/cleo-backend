const express = require("express");
const router = express.Router();

const {
  addCategory,
  addAllCategory,
  getShowingCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
  updateStatus,
  deleteCategory,
} = require("../controllers/Category");

router.post("/add", addCategory);

router.post("/all", addAllCategory);

router.get("/show", getShowingCategory);

router.get("/", getAllCategory);

router.get("/:id", getCategoryById);

router.put("/:id", updateCategory);

router.put("/status/:id", updateStatus);

router.patch("/:id", deleteCategory);

module.exports = router;

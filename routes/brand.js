const express = require("express");
const router = express.Router();

const {
  addBrand,
  addAllBrand,
  getShowingBrand,
  getAllBrand,
  getBrandById,
  updateBrand,
  updateStatus,
  deleteBrand,
} = require("../controllers/Brand");

router.post("/add", addBrand);

router.post("/all", addAllBrand);

router.get("/show", getShowingBrand);

router.get("/", getAllBrand);

router.get("/:id", getBrandById);

router.put("/:id", updateBrand);

router.put("/status/:id", updateStatus);

router.patch("/:id", deleteBrand);

module.exports = router;

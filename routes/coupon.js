const express = require("express");
const router = express.Router();

const {
  addCoupon,
  addAllCoupon,
  getAllCoupon,
  getCouponById,
  updateCoupon,
  deleteCoupon,
} = require("../controllers/Coupon");

router.post("/add", addCoupon);

router.post("/all", addAllCoupon);

router.get("/", getAllCoupon);

router.get("/:id", getCouponById);

router.put("/:id", updateCoupon);

router.delete("/:id", deleteCoupon);

module.exports = router;

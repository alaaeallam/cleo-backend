const express = require("express");
const router = express.Router();

const {
  addOrder,
  getOrderById,
  getOrderByUser,
} = require("../controllers/userOrder");

router.post("/add", addOrder);

router.get("/:id", getOrderById);

router.get("/", getOrderByUser);

module.exports = router;

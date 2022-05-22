const express = require("express");
const router = express.Router();

const {
  getAllOrders,
  getOrderByUser,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/Order");

router.get("/", getAllOrders);

router.get("/user/:id", getOrderByUser);

router.get("/:id", getOrderById);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

module.exports = router;

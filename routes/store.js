const express = require("express");
const router = express.Router();

const {
  addStore,
  addAllStore,
  getShowingStore,
  getAllStore,
  getStoreById,
  updateStore,
  updateStatus,
  deleteStore,
} = require("../controllers/Store");

router.post("/add", addStore);

router.post("/all", addAllStore);

router.get("/show", getShowingStore);

router.get("/", getAllStore);

router.get("/:id", getStoreById);

router.put("/:id", updateStore);

router.put("/status/:id", updateStatus);

router.patch("/:id", deleteStore);

module.exports = router;

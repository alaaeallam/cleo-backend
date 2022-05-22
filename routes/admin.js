const express = require("express");
const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
  forgetPassword,
  resetPassword,
  addStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
} = require("../controllers/Admin");

const { passwordVerificationLimit } = require("../config/others");

router.post("/register", registerAdmin);

router.post("/login", loginAdmin);

router.put("/forget-password", passwordVerificationLimit, forgetPassword);

router.put("/reset-password", resetPassword);

router.post("/add", addStaff);

router.post("/", getAllStaff);

router.post("/:id", getStaffById);

router.put("/:id", updateStaff);

router.delete("/:id", deleteStaff);

module.exports = router;

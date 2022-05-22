const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  signUpWithProvider,
  emailVerification,
  forgetPassword,
  resetPassword,
  changePassword,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/User");

const {
  emailVerificationLimit,
  passwordVerificationLimit,
} = require("../config/others");

router.post("/register/:token", registerUser);

router.post("/login", loginUser);

router.post("/singup", signUpWithProvider);

router.post("/verify-email", emailVerificationLimit, emailVerification);

router.put("/forget-password", passwordVerificationLimit, forgetPassword);

router.put("/reset-password", resetPassword);

router.post("/change-password", changePassword);

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDb = require("../config/db");

const userRoutes = require("../routes/user");
const adminRoutes = require("../routes/admin");
const brandRoutes = require("../routes/brand");
const categoryRoutes = require("../routes/category");
const couponRoutes = require("../routes/coupon");
const orderRoutes = require("../routes/order");
const userOrderRoutes = require("../routes/userOrder");
const storeRoutes = require("../routes/store");
const productRoutes = require("../routes/product");
const { isAuth } = require("../config/auth");

connectDb();
const app = express();

app.enable("trust proxy");

app.use(express.json({ limit: "4mb" }));
app.use(cors());

app.use("/api/user/", userRoutes);
app.use("/api/admin/", adminRoutes);
app.use("/api/brand/", brandRoutes);
app.use("/api/category/", categoryRoutes);
app.use("/api/coupon/", couponRoutes);
app.use("/api/orders/", isAuth, orderRoutes);
app.use("/api/order/", isAuth, userOrderRoutes);
app.use("/api/store/", storeRoutes);
app.use("/api/products/", productRoutes);

// express default error middleware handler

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ err: err });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

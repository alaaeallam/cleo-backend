const Brand = require("../models/Brand");

const addBrand = async (req, res) => {
  try {
    const newBrand = new Brand(req.body);
    await newBrand.save();
    res.status(200).send({
      message: "Brand Added Successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const addAllBrand = async (req, res) => {
  try {
    await Brand.insertMany(req.body);
    res.status(200).send({
      message: "Brand Added successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getShowingBrand = async (req, res) => {
  try {
    const brands = await Brand.find({ status: "Show" }).sort({
      _id: -1,
    });
    res.send(brands);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllBrand = async (req, res) => {
  try {
    const brands = await Brand.find({}).sort({ _id: -1 });
    res.send(brands);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    res.send(brand);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (brand) {
      brand.name = req.body.name;
      brand.icon = req.body.icon;
      await brand.save();
      res.send({ message: "Brand Updated Successfully!" });
    }
  } catch (err) {
    res.status(404).send({ message: "Brand not found!" });
  }
};

const updateStatus = (req, res) => {
  const newStatus = req.body.status;

  Brand.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: newStatus,
      },
    },
    (err) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.status(200).send({
          message: `Brand ${newStatus} Successfully!`,
        });
      }
    }
  );
};

const deleteBrand = (req, res) => {
  Brand.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: "Brand Deleted Successfully!",
      });
    }
  });
};

module.exports = {
  addBrand,
  addAllBrand,
  getAllBrand,
  getShowingBrand,
  getBrandById,
  updateBrand,
  updateStatus,
  deleteBrand,
};

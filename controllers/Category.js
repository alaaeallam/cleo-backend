const Category = require("../models/Category");

//Adding Category
const addCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).send({
      message: "Category Added Successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

//Adding All Categories
const addAllCategory = async (req, res) => {
  try {
    await Category.insertMany(req.body);
    res.status(200).send({
      message: "Category Added successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

//Showing Categories
const getShowingCategory = async (req, res) => {
  try {
    const categories = await Category.find({ status: "Show" }).sort({
      _id: -1,
    });
    res.send(categories);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// Getting All Categories

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({}).sort({ _id: -1 });
    res.send(categories);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// Getting Categories By ID
const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.send(category);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

//Updating Category
const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      category.parent = req.body.parent;
      // category.slug = req.body.slug;
      category.type = req.body.type;
      category.icon = req.body.icon;
      category.children = req.body.children;
      await category.save();
      res.send({ message: "Category Updated Successfully!" });
    }
  } catch (err) {
    res.status(404).send({ message: "Category not found!" });
  }
};

//Updating Category's Status
const updateStatus = (req, res) => {
  const newStatus = req.body.status;

  Category.updateOne(
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
          message: `Category ${newStatus} Successfully!`,
        });
      }
    }
  );
};

//Deleting Category
const deleteCategory = (req, res) => {
  Category.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: "Category Deleted Successfully!",
      });
    }
  });
};

module.exports = {
  addCategory,
  addAllCategory,
  getAllCategory,
  getShowingCategory,
  getCategoryById,
  updateCategory,
  updateStatus,
  deleteCategory,
};
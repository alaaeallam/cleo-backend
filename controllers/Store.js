const Store = require("../models/Store");

const addStore = async (req, res) => {
  try {
    const newStore = new Store(req.body);
    await newStore.save();
    res.status(200).send({
      message: "Store Added Successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const addAllStore = async (req, res) => {
  try {
    await Store.insertMany(req.body);
    res.status(200).send({
      message: "Store Added successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getShowingStore = async (req, res) => {
  try {
    const stores = await Store.find({ status: "Show" }).sort({
      _id: -1,
    });
    res.send(stores);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllStore = async (req, res) => {
  try {
    const stores = await Store.find({}).sort({ _id: -1 });
    res.send(stores);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getStoreById = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);
    res.send(store);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateStore = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);
    if (store) {
      store.name = req.body.name;
      store.icon = req.body.icon;
      store.banner = req.body.banner;
      store.city = req.body.city;
      store.address = req.body.address;
      store.phone = req.body.phone;
      await store.save();
      res.send({ message: "Store Updated Successfully!" });
    }
  } catch (err) {
    res.status(404).send({ message: "Store not found!" });
  }
};

const updateStatus = (req, res) => {
  const newStatus = req.body.status;

  Store.updateOne(
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
          message: `Store ${newStatus} Successfully!`,
        });
      }
    }
  );
};

const deleteStore = async (req, res) => {
  Store.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: "Store Deleted Successfully!",
      });
    }
  });
};

module.exports = {
  addStore,
  addAllStore,
  getAllStore,
  getShowingStore,
  getStoreById,
  updateStore,
  updateStatus,
  deleteStore,
};

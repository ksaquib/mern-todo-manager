//User Model
const User = require("../models/User");

//Item Model
const Item = require("../models/Item");

const addItem = async (req, res) => {
  try {
    let newItem = new Item(req.body);
    let user = await User.findById(req.user.id);

    newItem.user = user;
    await newItem.save();
    return res.json(newItem);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ msg: e });
  }
};

const editItem = async (req, res) => {
  try {
    let item = await Item.findById(req.params.id).populate("user", "id");

    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    item = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    return res.json(item);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ msg: e });
  }
};

const getItems = async (req, res) => {
  try {
    let items = await Item.find({
      user: await User.findById(req.user.id),
    }).sort({ date: -1 });
    return res.json(items);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ msg: e });
  }
};

const deleteItem = async (req, res) => {
  try {
    let item = await Item.findById(req.params.id).populate("user", "id");

    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    await item.remove(req.params.id);

    return res.json({ success: true });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ msg: e });
  }
};

module.exports = { addItem, editItem, getItems, deleteItem };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

//Create Schema
const ItemSchema = new Schema({
  user: { type: ObjectId, ref: "user" },
  task: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  priority: { type: Number, default: 4 },
  completed: { type: Boolean, default: false },
});

module.exports = Item = mongoose.model("item", ItemSchema);

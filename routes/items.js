const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const itemController = require("../controllers/itemControl");

//@route    POST api/items
//@desc     Create an Item
//@access   Private
router.post("/", auth, itemController.addItem);

//@route    GET api/items
//@desc     Get all Item
//@access   Private
router.get("/", auth, itemController.getItems);

//@route    PUT api/items
//@desc     Edit an  Item
//@access   Private
router.put("/:id", auth, itemController.editItem);

//@route    DELETE api/items
//@desc     Delete an  Item
//@access   Private
router.delete("/:id", auth, itemController.deleteItem);

module.exports = router;

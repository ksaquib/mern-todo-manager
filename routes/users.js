const express = require("express");
const router = express.Router();
const validateUserRegistration = require("../controllers/userControl");

//@route    POST api/users
//@desc     Register new Users
//@access   Public
router.post("/", validateUserRegistration);

module.exports = router;

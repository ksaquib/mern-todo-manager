const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//User Model
const User = require("../models/User");

const validateToken = (req, res) => {
  const { email, password } = req.body;

  //Simple validation
  if (!email || !password) {
    return res.status(404).json({ msg: "Please enter all the fields" });
  }

  //Check for exisiting user
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(404).json({ msg: "User does not  exist" });

    //Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              name: user.name,
              id: user.id,
              email: user.email,
            },
          });
        }
      );
    });
  });
};

const validateUser = (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
};

module.exports = { validateToken, validateUser };

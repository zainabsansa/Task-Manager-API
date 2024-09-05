const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async function (req, res) {
  try {
    const emailExist = await User.findOne({
      email: req.body.email,
    });
    if (emailExist) {
      return res.json({
        message: "Email Already Exists!",
      });
    }

    const saltRound = 10;
    const hashedPassword = await bcrypt.hashSync(req.body.password, saltRound);
    const newUser = await User.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

ex
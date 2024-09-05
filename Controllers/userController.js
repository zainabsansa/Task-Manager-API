const express = require("express");
const User = require("../Models/userModel");
const bcrypt = require("bcrypt");

exports.createUser = async function (req, res) {
  try {
    const saltRound = 10;
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRound);

    const newUser = await User.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "success",
      message: "User created!",
      data: {
        users: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getOneUser = async function (req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      user: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateUser = async function (req, res) {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        users: updateUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteUser = async function (req, res) {
  try {
    User.findByIdAndDelete(req.params.productId);
    res.status(200).json({
      status: "success",
      message: "User Deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "User not deleted!",
    });
  }
};

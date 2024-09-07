const express = require("express");
const User = require("../Models/userModel");
const { createUserValidator } = require("../Validators/userValidator");

const { hashPassword } = require("../helpers");
const { createUserRepository } = require("../Repository/userRepository");


exports.createUser = async function (req, res) {
  try {
    const {fullName, email, password} = createUserValidator.parse(req.body)
    const hashedPassword = hashPassword(password);
    const newUser = await createUserRepository({fullName, email, password:hashedPassword});
      
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

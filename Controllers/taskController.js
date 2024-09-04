const express = require("express");
// const User = require("../Models/userModel");
const Task = require("../Models/taskModel");

exports.createTask = async function (req, res) {
  try {
    const newTask = await Task.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      dueTime: req.body.dueTime,
    });
    res.status(201).json({
      status: "success",
      message: "task created!",
      data: {
        task: newTask,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateTask = async function (req, res) {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });

    res.status(200).json({
      status: "success",
      message: "Task Updated",
      data: {
        tasks: updateTask,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};


exports.deleteTask = async function (req, res) {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      message: "Task Deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

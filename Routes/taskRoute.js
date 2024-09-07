const express = require("express");
const taskController = require("../Controllers/taskController");
const taskRouter = express.Router();

taskRouter.post("/createTask", taskController.createTask);
taskRouter.get("/getOneUser/:Id", taskController.getOneTask)
taskRouter.patch("/updateTask/:id", taskController.updateTask);
taskRouter.delete("/deleteTask/:id", taskController.deleteTask);

module.exports = taskRouter;

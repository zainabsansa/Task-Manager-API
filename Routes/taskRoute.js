const express = require("express");
const taskController = require("../Controllers/taskController");
const router = express.Router();

router.post("/createTask", taskController.createTask);
router.patch("/updateTask/:id", taskController.updateTask);
router.delete("/deleteTask/:id", taskController.deleteTask);

module.exports = router;

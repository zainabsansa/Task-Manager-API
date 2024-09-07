const express = require("express");
const userController = require("../Controllers/userController");
const userRouter = express.Router();

userRouter.post("/createUser", userController.createUser);
userRouter.get("/getOneUser/:id", userController.getOneUser);
userRouter.patch("/updateUser/:id", userController.updateUser);
userRouter.delete("/deleteUser/:userId", userController.deleteUser);

module.exports = userRouter;
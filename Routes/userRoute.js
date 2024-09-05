const express = require("express");
const userController = require("../Controllers/userController");
const router = express.Router();

router.post("/createUser", userController.createUser);
router.get("/getOneUser/:id", userController.getOneUser);
router.patch("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:userId", userController.deleteUser);

module.exports = router;
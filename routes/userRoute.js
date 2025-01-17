const express = require("express");

const {
  loginController,
  registerController,
} = require("../controllers/userController");

//creating router object
const router = express.Router();

//routers
//1.POST||LOGIN USER
router.post("/login", loginController);

//2.POST||REGISTER USER
router.post("/register", registerController);

module.exports = router;

//import the require package
const express = require("express");
const router = express.Router();

//import the controller
const userController = require("../controller/first");

//create the api
router.get("/", userController.user);
router.get("/userlist", userController.userList);

//export the router
module.exports = router;

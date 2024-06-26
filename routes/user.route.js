const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/", userController.findAll);
router.get("/", userController.findOne);

module.exports = router;
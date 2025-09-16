const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authControllers = require("../controller/auth-controller");

router.route("/").get( authControllers.home);
router.route("/register").post( authControllers.register);
router.route("/login").post( authControllers.login);

module.exports = router;

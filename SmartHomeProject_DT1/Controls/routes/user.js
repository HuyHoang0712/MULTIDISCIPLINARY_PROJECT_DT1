const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/userController");

router.get("/login", user_controller.user_login);

module.exports = router;
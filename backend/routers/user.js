const express = require("express");
const { handleSignup,getUserData, handleLogin } = require("../controllers/users");
const router = express.Router();

router.post("/signup", handleSignup);
router.post("/login", handleLogin);
router.get("/",getUserData);
module.exports = router;
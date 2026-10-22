const express = require("express");
const Auth = express.Router();
const AuthController = require("../Controller/AuthController");

Auth.post("/signup", AuthController.signup);
Auth.post("/login", AuthController.login);

module.exports = Auth;

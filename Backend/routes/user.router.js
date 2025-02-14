const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {UserDetailController} = require("../controllers/userDetailController.js");
const {authToken} = require("../Middleware/authToken.MId.js");
const {
  UserRegister,
  UserLogin,
} = require("../controllers/user.controller.js");

router.post(
  "/register",
  [
    body("fullname").isLength({ min: 3 }).withMessage("Enter FullName!"),
    body("email").isEmail().withMessage("Invalid Email!"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password Must be 5 Char Long"),
  ],
  UserRegister
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Credintial"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password Must be 5 char long"),
  ],
  UserLogin
); 

router.get("/details", authToken, UserDetailController);


module.exports = router;

import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/login", loginController);
authRoute.post("/register", registerController);

export default authRoute;

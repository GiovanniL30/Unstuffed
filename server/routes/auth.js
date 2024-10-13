import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(402)
      .send({ message: "Username and Password are required" });
  }

  if (username != "admin" && password != "admin") {
    return res.status(403).send({ message: "Invalid Credentials" });
  }

  return res.status(200).send({ message: "Okay" });
});
authRoute.post("/register", registerController);

export default authRoute;

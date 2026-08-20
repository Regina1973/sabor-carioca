import { Router } from "express";

import { LoginController } from "../login/loginController";

const authRoutes = Router();

const loginController = new LoginController();

authRoutes.post(
  "/login",
  (req, res) => loginController.handle(req, res)
);

export { authRoutes };

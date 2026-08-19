import { Router } from "express";

const authRoutes = Router();

authRoutes.post("/login");

authRoutes.get("/me");

export { authRoutes };
import express from "express";
import { checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/check", (req, res, next) => {
  console.log("CHECK ROUTE HIT");
  next();
}, protectRoute, checkAuth);

export default router;
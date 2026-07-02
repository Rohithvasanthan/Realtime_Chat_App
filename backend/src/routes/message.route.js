import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware.js";
import { getConversationsForSidebar, getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller";

const router = express.Router()

router.use(protectRoute);

router.get("/users", protectRoute,getUsersForSidebar);
router.get("/conversations", getConversationsForSidebar);
router.get("/:id", getMessages);
router.post("/send/:id", upload.single("media"), sendMessage);

export default router;
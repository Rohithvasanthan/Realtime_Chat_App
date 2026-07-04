import { getAuth } from "@clerk/express";
import User from "../models/user.model.js";

export async function protectRoute(req, res, next) {
  try {
    console.log("===== protectRoute =====");

    const auth = getAuth(req);

    console.log("Auth object:", auth);

    const { userId } = auth;

    console.log("Clerk User ID:", userId);

    console.log("Connected DB:", User.db.name);
console.log("Collection:", User.collection.name);

const allUsers = await User.find({});
console.log("ALL USERS:", allUsers);

const user = await User.findOne({
  clerkId: userId,
});

console.log("FOUND USER:", user);

    console.log("Mongo User:", user);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!user) {
      return res.status(404).json({
        message: "User profile is not synced yet",
      });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log(err);
  }
}
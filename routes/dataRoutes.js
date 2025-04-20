import express from "express";
import {
  getAllTopics,
  updateDSAProgress,
  userProgress,
} from "../controller/userDataController/userData.js";
import { auth } from "../middleware/auth.js";

const userDataRouter = express.Router();

userDataRouter.get("/allTopics", auth, getAllTopics);

userDataRouter.post("/update", auth, updateDSAProgress);
userDataRouter.post("/progress", auth, userProgress);

export default userDataRouter;

import { Router } from "express";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../controllers/favorite.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyToken);

router.get("/", getFavorites);
router.post("/:id", addFavorite);
router.delete("/:id", removeFavorite);

export default router;

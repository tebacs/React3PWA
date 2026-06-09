import { Router } from "express";
import {
  getItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
} from "../controllers/item.controller.js";

const router = Router();

router.get("/", getItems);
router.post("/", createItem);
router.get("/:id", getItemById);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;

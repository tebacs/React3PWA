import * as itemService from "../services/item.service.js";
import { validateItem } from "../validations/item.validation.js";

export const getItems = async (req, res) => {
  try {
    const { page, limit, name, category } = req.query;
    const items = await itemService.getAllItems(page, limit, name, category);
    res.status(200).json(items);
  } catch (error) {
    console.error("Error REAL de Prisma:", error);

    res.status(500).json({ error: "Error al obtener los items" });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = await itemService.getItemById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item no encontrado" }); // HTTP 404
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el item" });
  }
};

export const createItem = async (req, res) => {
  try {
    const errors = validateItem(req.body);
    if (errors.length > 0) return res.status(400).json({ errors }); // HTTP 400

    const newItem = await itemService.createItem(req.body);
    res.status(201).json(newItem); // HTTP 201
  } catch (error) {
    res.status(500).json({ error: "Error al crear el item" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const errors = validateItem(req.body);
    if (errors.length > 0) return res.status(400).json({ errors }); // HTTP 400

    const updatedItem = await itemService.updateItem(req.params.id, req.body);
    res.status(200).json(updatedItem); // HTTP 200
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el item (puede que el ID no exista)",
    });
  }
};

export const deleteItem = async (req, res) => {
  try {
    await itemService.deleteItem(req.params.id);
    res.status(200).json({ message: "Item eliminado correctamente" }); // HTTP 200
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al eliminar el item (puede que el ID no exista)" });
  }
};

import prisma from "../../lib/prisma.js";

export const getFavorites = async (req, res) => {
  try {
    const userId = req.user.userId;

    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: { item: true },
    });

    return res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};

export const addFavorite = async (req, res) => {
  try {
    const userId = req.user.userId;
    const itemId = parseInt(req.params.id);

    const item = await prisma.item.findUnique({ where: { id: itemId } });
    if (!item) {
      return res.status(404).json({ error: "El elemento no existe." });
    }

    const existingFavorite = await prisma.favorite.findUnique({
      where: {
        userId_itemId: { userId, itemId },
      },
    });

    if (existingFavorite) {
      return res.status(409).json({ error: "El favorito ya existe." });
    }

    const newFavorite = await prisma.favorite.create({
      data: { userId, itemId },
    });

    return res.status(201).json(newFavorite);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};

export const removeFavorite = async (req, res) => {
  try {
    const userId = req.user.userId;
    const itemId = parseInt(req.params.id);

    const existingFavorite = await prisma.favorite.findUnique({
      where: {
        userId_itemId: { userId, itemId },
      },
    });

    if (!existingFavorite) {
      return res
        .status(404)
        .json({ error: "El favorito no existe para este usuario." });
    }

    await prisma.favorite.delete({
      where: {
        userId_itemId: { userId, itemId },
      },
    });

    return res
      .status(200)
      .json({ message: "Favorito eliminado correctamente." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};

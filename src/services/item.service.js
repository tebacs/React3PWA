import { prisma } from "../../lib/prisma.js";

export const getAllItems = async (page = 1, limit = 12, name, category) => {
  // Configuración de paginación
  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);

  // Filtros dinámicos
  const where = {};
  if (name) {
    where.name = { contains: name, mode: "insensitive" };
  }
  if (category) {
    where.category = { in: category.split(",") };
  }

  return await prisma.item.findMany({
    where,
    skip,
    take,
    orderBy: { id: "asc" },
  });
};

export const getItemById = async (id) => {
  return await prisma.item.findUnique({
    where: { id: Number(id) },
  });
};

export const createItem = async (data) => {
  return await prisma.item.create({
    data: {
      name: data.name,
      category: data.category,
      image: data.image,
      shortDescription: data.shortDescription,
      fullDescription: data.fullDescription,
      technicalSpecs: data.technicalSpecs,
    },
  });
};

export const updateItem = async (id, data) => {
  return await prisma.item.update({
    where: { id: Number(id) },
    data: {
      name: data.name,
      category: data.category,
      image: data.image,
      shortDescription: data.shortDescription,
      fullDescription: data.fullDescription,
      technicalSpecs: data.technicalSpecs,
    },
  });
};

export const deleteItem = async (id) => {
  return await prisma.item.delete({
    where: { id: Number(id) },
  });
};

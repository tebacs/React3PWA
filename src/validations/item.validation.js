export const validateItem = (body) => {
  const errors = [];

  if (!body.name || typeof body.name !== "string" || body.name.trim() === "") {
    errors.push('El campo "name" es obligatorio y debe ser texto.');
  }
  if (
    !body.category ||
    typeof body.category !== "string" ||
    body.category.trim() === ""
  ) {
    errors.push('El campo "category" es obligatorio.');
  }

  return errors;
};

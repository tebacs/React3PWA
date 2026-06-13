import express from "express";
import cors from "cors";
import itemRoutes from "./routes/item.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// 1. Ruta raíz (Para que Vercel no te tire 404 al entrar al link principal)
app.get("/", (req, res) => {
  res.send({ status: "ok", message: "¡El backend de Nexus está online y funcionando!" });
});

// 2. Tu ruta de health check original
app.get("/api/health", (req, res) => {
  res.send({ status: "ok", message: "API funcionando correctamente" });
});

// 3. Tus rutas de items
app.use("/api/items", itemRoutes);

// 4. app.listen condicional: Solo corre en tu local, Vercel lo ignora.
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// 5. La exportación vital para que el entorno Serverless funcione
export default app;
import express from "express";
import cors from "cors";
import itemRoutes from "./routes/item.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/api/health", (req, res) => {
  res.send({ status: "ok", message: "API funcionando correctamente" });
});

app.use("/api/items", itemRoutes);

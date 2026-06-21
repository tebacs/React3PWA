import express from "express";
import cors from "cors";
import itemRoutes from "./routes/item.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/health", (req, res) =>
  res.status(200).json({ message: "Todo correcto master 👍" }),
);

app.use("/api/items", itemRoutes);

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

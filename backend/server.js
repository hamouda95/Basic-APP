// backend/server.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

// 🔹 Fix ESM __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// 🛡️ Middlewares de sécurité et JSON
app.use(helmet());
app.use(cors());
app.use(express.json());

// 🚀 Routes API
app.use("/api/users", userRoutes);

// 📂 Servir React build
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// 🔥 Lancer le serveur
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

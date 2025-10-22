import express from "express";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/userRoutes.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

// Servir frontend buildé
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

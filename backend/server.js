import express from "express";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`✅ Backend en ligne sur http://localhost:${PORT}`));
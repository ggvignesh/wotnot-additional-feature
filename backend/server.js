import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// =======================
// Your backend API routes
// =======================
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend API!" });
});

// =======================
// Serve Vue.js frontend
// =======================
const frontendPath = path.join(__dirname, "../frontend/app/dist");
app.use(express.static(frontendPath));

// For any unknown route, send back Vue index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// =======================
// Start server
// =======================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



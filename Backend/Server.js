const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/config"); // ✅ Import your DB connection
const userRoutes = require("./routes/userRoutes"); // ✅ Import user routes

dotenv.config();      // Load environment variables
connectDB();          // Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON
app.use("/api", userRoutes); // ✅ Use the user routes

const PORT = process.env.PORT || 5000;

// Test route
app.get("/", (req, res) => {
  res.send("📚 Welcome to BookNest API!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

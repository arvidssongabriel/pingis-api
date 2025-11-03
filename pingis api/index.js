const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Pingis = require("./models/pingis.model");
const app = express();

app.use(
   cors({
      origin: (origin, callback) => {
         // ✅ Tillåt alla origins under utveckling och vid test
         callback(null, true);
      },
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
   })
);

app.use(express.json());

// Root route
app.get("/", (req, res) => {
   res.send("Welcome to the Pingis API");
});

// ✅ MongoDB-anslutning
mongoose
   .connect(
      "mongodb+srv://arvidssongabriel:Xpense9505@backenddb.ft6xc.mongodb.net/BackendDB?retryWrites=true&w=majority&appName=BackendDB"
   )
   .then(() => console.log("✅ Connected to MongoDB"))
   .catch((error) => console.error("❌ Connection failed:", error));

// ✅ Hämta alla produkter
app.get("/api/pingis", async (req, res) => {
   try {
      const pingis = await Pingis.find();
      res.status(200).json(pingis);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

// ✅ Starta servern
const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
   console.log(`🚀 Server running on http://localhost:${PORT}`);
});

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require('./routes/eventRoutes');
const cemeteryRoutes = require('./routes/cemeteryRoutes');
const flowerRoutes = require('./routes/flowerRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const coffinRoutes = require('./routes/coffinRoutes');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
console.log(process.env.MONGO_URI);
// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => res.send("Itabaza API is running!"));
app.use("/api/auth", authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/cemeteries', cemeteryRoutes);
app.use('/api/flowers', flowerRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/coffins', coffinRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
require("dotenv").config();
const connectDB = require("./databases/db");
const router = require("./routes/cart");
const PORT = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(express.json({ extended: false }));
app.use("/api/cart", router);

app.listen(PORT, console.log(`Server is on in port ${PORT}`));

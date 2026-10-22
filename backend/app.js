const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const app = express();
const Auth = require("./Routers/AuthRouter");
const User = require("./Routers/UserRouter");
const Shop = require("./Routers/ShopRouter");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/api", Auth);
app.use("/api", User);
app.use("/api", Shop);

// start the server
const startserver = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vivekshrivastav325_db_user:DhlHwB3KcvKyhb8g@cluster0.ux3ri7r.mongodb.net/database",
    );

    console.log("Database connected successfully");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log("Error found:", error);
  }
};

startserver();

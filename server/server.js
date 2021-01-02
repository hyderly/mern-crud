const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const FoodModel = require("./models/Food");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(express.json());

app.get("/", async (req, res, next) => {
  const food = await FoodModel.create({
    name: "Burger",
    foodType: "Fast food",
    daysSinceIAte: 10,
  });
  try {
    res.status(400, {
      success: true,
      data: food,
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `App is listening at port ${process.env.PORT} on ${process.env.MODE} mode.`
  );
});

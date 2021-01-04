const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const FoodModel = require("./models/Food");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.post("/insert", async (req, res) => {
  const foodName = req.body.foodName;
  const foodType = req.body.foodType;
  const daysSinceIAte = req.body.daysSinceIAte;

  const food = await FoodModel.create({
    foodName: foodName,
    foodType: foodType,
    daysSinceIAte: daysSinceIAte,
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

app.get("/read", async (req, res) => {
  const foods = FoodModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send({
      success: true,
      data: result,
    });
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log(
    `App is listening at port ${process.env.PORT} on ${process.env.MODE} mode.`
  );
});

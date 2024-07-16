const express = require("express");
const { connection } = require("./Configs/db");
const { userRouter } = require("./routes/user.routes");
const { productRouter } = require("./routes/product.routes");
const { cartRouter } = require("./routes/cart.routes");
const cors = require("cors");
const connectDB =require("./Configs/db");

const app = express();
app.use(
  cors({
    origin: [""],
    methods:["POST","GET"],
    credentials: true
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

const port = process.env.PORT || 3030;

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// Start the server
app.listen(port, async () => {
  try {
    await connectDB();
    await connection;
    console.log("Connected to the DB");
  } catch (err) {
    console.log("Trouble connecting to the DB");
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
});

import express from "express";
import movieRoutes from "./movies/movies.router.js";
import connectDb from "./lib/db.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
// connect DB
connectDb();
app.get("/", (req, res) => {
  res.json("hey EveryBody...!!");
});
app.listen(4000, () => {
  console.log("Port is Running Successfully");
});

app.use("/movies", movieRoutes);

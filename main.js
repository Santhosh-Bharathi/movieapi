import express from "express";
import movieRoutes from "./movies/movies.router.js";
const app = express();
app.get("/", (req, res) => {
  res.json("hey EveryBody...!!");
});
app.listen(4000, () => {
  console.log("Port is Running Successfully");
});

app.use("/movies", movieRoutes);

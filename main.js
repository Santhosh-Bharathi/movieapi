import express, { json } from "express";
import connectDb from "./lib/db.js";
import movieRoutes from "./movies/movies.router.js";
const app = express();
app.use(json());
// connect DB
app.listen(8989);
connectDb();
app.use("/movies", movieRoutes);
app.use(express.urlencoded());

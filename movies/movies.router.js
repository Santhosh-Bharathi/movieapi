// import { Router } from "express";
import express from "express";
import {
  movieCreate,
  movieDelete,
  movieIndex,
  movieUpdate,
  movieDetail,
} from "../Controllers/movie.controllers.js";

const router = express.Router();

//Here after we Can create an CRUD Operation for Movie Appplication

// R -for reading an Movies
router.get("/:id", movieDetail);
// R -for reading an Movies
router.get("/", movieIndex);
// C -for creating an Movies
router.post("/", movieCreate);
// U -for Update an Movie
router.put("/:id", movieUpdate);
// D -for delete an Movie
router.delete("/:id", movieDelete);
export default router;

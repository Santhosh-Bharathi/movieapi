import express from "express";

const router = express.Router();

//Here after we Can create an CRUD Operation for Movie Appplication

// R -for reading an Movies
router.get("/", (req, res) => {
  res.send("Read an Movies from response");
});
// C -for creating an Movies
router.post("/", (req, res) => {
  res.send("Read Movie from api");
});
// U -for Update an Movie
router.put("/", (req, res) => {
  res.send("For Updating Movie");
});
// D -for delete an Movie
router.delete("/", (req, res) => {
  res.send("For Delete Movie");
});
export default router;

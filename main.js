import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.json("hey EveryBody...!!");
});
app.listen(4000, () => {
  console.log(`Port is Running Successfully`);
});

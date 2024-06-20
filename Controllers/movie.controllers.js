import Movies from "../models/movie.model.js";

export const movieIndex = async (req, res) => {
  try {
    const movie = await Movies.findById(req.params.id);
    console.log("params" + req.params.id);
    if (movie == null) {
      res.status(404).json({ message: "Cannot find Movie" });
    } else {
      res.json(movie);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
  res.json(req.body);
};

export const movieCreate = async (req, res) => {
  const movieData = new Movies({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const movie = await movieData.save();
    res.status(201).json(movieData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const movieUpdate = (req, res) => {
  res.send("For Updating Movie");
};
export const movieDelete = (req, res) => {
  res.send("For Delete Movie");
};

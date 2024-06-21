import Movies from "../models/movie.model.js";

export const movieIndex = async (req, res) => {
  try {
    const movieList = await Movies.find();
    res.json(movieList);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const movieDetail = async (req, res) => {
  try {
    const movielist = await Movies.findById(req.params.id);
    res.json(movielist);
  } catch (error) {
    res.json({ message: error.message });
  }
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

export const movieUpdate = async (req, res) => {
  try {
    const movielist = await Movies.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      }
    );
    res.json(movielist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const movieDelete = async (req, res) => {
  const filterId = req.params.id;
  try {
    const deleteMovie = await Movies.deleteOne({ _id: filterId });
    res.json({ message: "Movie is Deleted !" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

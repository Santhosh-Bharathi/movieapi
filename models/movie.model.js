import { model, Schema, Types } from "mongoose";

const movieScheme = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: String,
});
const Movies = model("movie", movieScheme);
export default Movies;

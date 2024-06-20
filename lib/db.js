import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/apis");
    console.log("DataBase Connected Successfully");
  } catch (error) {
    console.error(error);
    console.log("Database Is Not connected");
    process.exit(1);
  }
};
export default connectDb;

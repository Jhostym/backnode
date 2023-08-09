import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://jhosrohe96:Ua2fHvpo1XZzgimj@sisweb.v4k4ope.mongodb.net/?retryWrites=true&w=majority");
    console.log(">>> DB is connected 🚀🚀")
  } catch (error) {
    console.log(error)
  }
}
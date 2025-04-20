
import mongoose from 'mongoose';
export const connectToDB = async () => {
  mongoose.connect("mongodb://localhost:27017/dsaSheet", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

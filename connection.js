
import mongoose from 'mongoose';
export const connectToDB = async () => {
  mongoose.connect("mongodb+srv://abcd:devvrat@cluster0.eysyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

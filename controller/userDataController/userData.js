import { Topic } from "../../models/Topic.js"; // Adjust the path as necessary
import { User } from "../../models/User.js"; // Adjust the path as necessary

export const getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find({});
    res.status(200).json(topics?.[0]);
  } catch (error) {
    console.error("Error fetching topics:", error);
    res.status(400).json({ message: "Error fetching topics" });
  }
};

export const updateDSAProgress = async (req, res) => {
  try {
    const { email, topics } = req.body;
    const updateFields = { progressData: topics };
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found");
      res.status(400).json({ message: "User not found" });
    }

    const result = await User.updateOne(
      { email },
      { $set: updateFields },
      { upsert: false } 
    );
    res.status(200).json({ message: "Progress updated successfully" });
  } catch (error) {
    console.error("Error updating DSA progress:", error.message);
    res.status(400).json({ message: "Error" });
  }
};

export const userProgress = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User not found!" });
    }
    res.status(201).json({ progressData: user.progressData });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

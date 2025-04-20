import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../models/User.js"; 

export const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      progressData : {}
    });

    await newUser.save();
    res.status(201).json("User registered successfully!");
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials!" });
    }

    const token = jwt.sign(
      { email: user.email },
      "secret", 
      { expiresIn: "1h" } 
    );

    res.status(201).json({ token: token, email: user.email });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

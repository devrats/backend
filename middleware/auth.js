import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token);
    
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    try {
      const decoded = jwt.verify(token, 'secret');
      console.log(decoded);
      
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };
  
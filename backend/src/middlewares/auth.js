import  { redisClient } from "../config/redisClient.js";

export const isTokenBlacklisted = (token, callback) => {
  redisClient.get(token, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result !== null);
    }
  });
};

export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  isTokenBlacklisted(token, (err, blacklisted) => {
      if (err) {
          return res.status(500).json({ message: 'Internal server error' });
      }
      if (blacklisted) {
          return res.status(401).json({ message: 'Token has been logged out' });
      }
      try {
          const decoded = jwt.verify(token, secretKey);
          req.user = decoded;
          next();
      } catch (error) {
          res.status(401).json({ message: 'Invalid token' });
      }
  });
};

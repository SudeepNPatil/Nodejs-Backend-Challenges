import jwt from 'jsonwebtoken';

export const authantication = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ message: 'No token Provided' });
  }

  jwt.verify(token, process.env.jwt_secret_key, (err, user) => {
    if (err) return res.status(403).json({ message: 'invalid taken' });
    req.user = user;

    next();
  });
};

export const authorizerole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: 'forbidden : not enough permission' });
    }
    next();
  };
};

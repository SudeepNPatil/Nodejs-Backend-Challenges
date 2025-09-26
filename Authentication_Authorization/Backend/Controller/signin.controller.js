import jwt from 'jsonwebtoken';
import user from '../models/user.model.js';

const generatetoken = (user) => {
  jwt.sign({ id: user._id, role: user.role }, process.env.jwt_secret_key, {
    expiresIn: '1h',
  });
};

async function signincontroller(req, res) {
  const { email, password } = req.body;

  const users = user.find({ email, password });
}

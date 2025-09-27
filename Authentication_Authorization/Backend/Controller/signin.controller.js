import jwt from 'jsonwebtoken';
import user from '../models/user.model.js';

const generatetoken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.jwt_secret_key,
    {
      expiresIn: '1h',
    }
  );
};

export default async function signincontroller(req, res) {
  const { email, password } = req.body;

  const users = await user.findOne({ email });

  if (!users) {
    return res.status(400).json({ message: 'user Not found!' });
  }

  if (users.password != password) {
    return res.status(400).json({ message: 'invalid credenials' });
  }

  const token = generatetoken(users);

  res.status(200).json({ message: 'login successful', token: token });
}

export const adminroute = async (req, res) => {
  res.status(200).send({ message: 'admin route is avaleble' });
};

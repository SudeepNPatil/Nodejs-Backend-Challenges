import user from '../models/user.model.js';

export async function usercontroller(req, res) {
  const { name, email, password, number } = req.body;

  const newuser = new user({ name, email, password, number, role: 'user' });
  await newuser.save();

  res.status(201).send({ message: 'User Resistered successfully' });
}

export const profileroute = async (req, res) => {
  res.status(200).send({ message: 'user profile' });
};

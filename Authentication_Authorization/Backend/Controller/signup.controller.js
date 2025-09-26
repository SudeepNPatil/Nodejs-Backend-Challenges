import user from '../models/user.model.js';

export default usercontroller = async (req, res) => {
  const { name, email, password, role } = req.body;

  const newuser = new user({ name, email, password, role });
  await newuser.save();

  res.status(201).send({ message: 'User Resistered successfully' });
};

import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
    eum: ['user', 'admin'],
    default: 'user',
  },
});

const user = mongoose.model('user', userSchema);

export default user;

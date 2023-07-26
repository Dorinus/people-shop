import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String, // email is a string
      required: true, // email is required
      unique: true, // email is unique
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // default is false
    },
  },
  {
    timestamps: true, // timestamps are enabled
  }
);

const User = mongoose.model('User', userSchema);

export default User;

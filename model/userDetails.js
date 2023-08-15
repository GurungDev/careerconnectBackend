const { Schema, model, models } = require("mongoose");

const userDetailSchema = new Schema({
  name: { type: String, required: [true, "Name is required!"] },
  location: { type: String, required: [true, "Location is required!"] },
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  number: {
    type: Number,
    unique: [true, "Number already exists!"],
    required: [true, "Phone Number is required!"],
  },
  picture: { type: String, unique: [true, "Picture already exists!"] },
  ratings: { type: Number, required: [true, "Name is required!"] },
  availability: { type: Boolean, required: [true, "Name is required!"] },
});

const UserDetails =
  models.UserDetails || model("UserDetails", userDetailSchema);

module.exports = UserDetails;

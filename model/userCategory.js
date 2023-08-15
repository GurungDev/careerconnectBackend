const { Schema, model, models } = require("mongoose");

const UserCategorySchema = new Schema({
  category_name: {
    type: String,
    unique: [true, "Category already exists!"],
    required: [true, "Category is required!"],
  },
});

const UserCategory =
  models.UserCategory || model("UserCategory", UserCategorySchema);

module.exports = UserCategory;

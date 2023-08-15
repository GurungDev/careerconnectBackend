const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
  detail_id: { type: Schema.Types.ObjectId, ref: "UserDetails" },
  category_Id: {
    type: Schema.Types.ObjectId,
    ref: "UserCategory",
    required: [true, "category is required!"],
  },
});

const User = models.User || model("User", userSchema);

module.exports = User;

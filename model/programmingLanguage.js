const { Schema, model, models } = require("mongoose");

const ProgrammingLanguageSchema = new Schema({
  title: {
    type: String,
    unique: [true, "Language already exists!"],
    required: [true, "Language Name is required!"],
  },
  image: { type: String, required: true },
  color: { type: String, required: true },
  bg: { type: String, required: true },
});

const ProgrammingLanguage =
  models.ProgrammingLanguage ||
  model("ProgrammingLanguage", ProgrammingLanguageSchema);

module.exports = ProgrammingLanguage;

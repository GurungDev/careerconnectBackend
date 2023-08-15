const ProgrammingLanguage = require("../../model/programmingLanguage");

const ADD = async (req, res) => {
  const { title, image, color, bg } = req?.body;
  try {
    const res = new ProgrammingLanguage({ title, image, color, bg });
    await res.save();
    res.status(200).send("Programming Language has been added");
  } catch (error) {
    res.status(500).send("Failed to Add a new Language");
  }
};

const Delete = async (req, res) => {
  const { id } = req?.body;
  try {
    const res = await ProgrammingLanguage.findByIdAndDelete(id);
    res.status(200).send("Programming Language has been added");
  } catch (error) {
    res.status(500).send("Failed to Add a new Language");
  }
};

const Update = async (req, res) => {
  const { title, image, color, bg } = req?.body;
  try {
    const res = new ProgrammingLanguage({ title, image, color, bg });
    await res.save();
    res.status(200).send("Programming Language has been added");
  } catch (error) {
    res.status(500).send("Failed to Add a new Language");
  }
};

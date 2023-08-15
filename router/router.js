const express = require("express");

const router = express.Router();
const user = require("./User/user.routes");
const programmingLanguage = require("./programmingLanguage/programmingLanguage.routes");

router.use("/user", user);
router.use("/programminglanguage", programmingLanguage);
module.exports = router;

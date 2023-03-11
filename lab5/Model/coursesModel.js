const mongoose = require("mongoose");
var DB_URL = "mongodb://127.0.0.1:27017/college";

mongoose.connect(DB_URL, { useNewUrlParser: true });

const coursesSchema = new mongoose.Schema({
  id: {
    type: "number",
    required: true,
  },
  name: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("courses", coursesSchema);

const mongoose = require("mongoose");
var DB_URL = "mongodb://127.0.0.1:27017/college";

mongoose.connect(DB_URL, { useNewUrlParser: true });

const studentsSchema = new mongoose.Schema({
  id: {
    type: "Number",
    required: true,
  },

  name: {
    type: "String",
    required: true,
    minimum: 3,
  },
  age: {
    type: "Number",
    minimum: 15,
    maximum: 50,
    required: true,
  },
  courses: {
    type: "String",
    enum: ["SD", "OS", "SWA", "AI"],
    required: true,
  },
});

module.exports = mongoose.model("students", studentsSchema);

let studentsModel = require("../Model/studentsModel");
var validate = require("../Utils/studentsValidation");

let getAllStudents = async (req, res) => {
  var allData = await studentsModel.find({});
  await res.json(allData);
};

let getOneStudentById = async (req, res) => {
  var ID = req.params.id;
  var data = await studentsModel.find({ id: ID });
  await res.json(data);
};

let createOneStudent = async (req, res) => {
  var data = req.body;
  const valid = validate(data);

  if (!valid) console.log(validate.errors);
  else {
    var newStudent = new studentsModel(data);
    await newStudent.save();
    await res.json(newStudent);
  }
};

let deleteOneStudent = async (req, res) => {
  var ID = req.params.id;
  var data = await studentsModel.deleteOneStudent({ id: ID });
  await res.json(data);
};

let updateOneStudent = async (req, res) => {
  var ID = req.params.id;
  var data = req.body;
  console.log(data);
  const valid = validate(data);

  if (!valid) console.log(validate.errors);
  else {
    data = await studentsModel.updateOne({ id: ID }, data);

    await res.json(data);
  }
};

module.exports = {
  getAllStudents,
  getOneStudentById,
  createOneStudent,
  updateOneStudent,
  deleteOneStudent,
};

const validate = require("../Utils/coursesValidation");
const coursesModel = require("../Model/coursesModel");

let getAllCourses = async (req, res) => {
  let data = await coursesModel.find({});
  await res.json(data);
};

let getOneCourseById = async (req, res) => {
  var ID = req.params.id;
  let data = await coursesModel.find({ id: ID });
  await res.json(data);
};

let creatOneCourse = async (req, res) => {
  let data = req.body;
  const valid = validate(data);

  if (!valid) console.log(validate.errors);
  else {
    let newCourse = new coursesModel(data);
    await newCourse.save();
    await res.json(newCourse);
  }
};

let updateOneCourse = async (req, res) => {
  var ID = req.params.id;
  let data = req.body;
  console.log(data);
  const valid = validate(data);

  if (!valid) console.log(validate.errors);
  else {
    data = await coursesModel.updateOne({ id: ID }, data);
    await res.json(data);
  }
};

let deleteOneCourse = async (req, res) => {
  var ID = req.params.id;
  let data = await coursesModel.deleteOne({ id: ID });
  await res.json(data);
};

module.exports = {
  getAllCourses,
  getOneCourseById,
  creatOneCourse,
  updateOneCourse,
  deleteOneCourse,
};

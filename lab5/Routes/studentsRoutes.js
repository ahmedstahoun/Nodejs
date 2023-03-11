const { Router } = require("express");
const express = require("express");
const router = express.Router();
const studentsController = require("../Controllers/studentsController");

router.get("/", studentsController.getAllStudents);

router.get("/:id", studentsController.getOneStudentById);

router.post("/create", studentsController.createOneStudent);

router.put("/:id", studentsController.updateOneStudent);

router.delete("/:id", studentsController.deleteOneStudent);

module.exports = router;

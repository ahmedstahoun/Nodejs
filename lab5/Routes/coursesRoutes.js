const express = require("express");
const router = express.Router();
const coursesController = require("../Controllers/coursesController");

router.get("/", coursesController.getAllCourses);
router.get("/:id", coursesController.getOneCourseById);
router.post("/create", coursesController.creatOneCourse);
router.put("/:id", coursesController.updateOneCourse);
router.delete("/:id", coursesController.deleteOneCourse);

module.exports = router;

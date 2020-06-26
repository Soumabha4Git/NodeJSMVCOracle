
const express = require('express');
const router = express.Router();




const courseController = require('../controllers/courseController');



router.get('/viewAllCourses', courseController.viewAllCourses);
router.get('/addCourses', courseController.addCourseForm);





module.exports = router;

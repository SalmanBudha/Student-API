const express = require('express');
const router = express.Router();
const student_controller = require('../controllers/student.controller');

router.post('/create', student_controller.create);

router.get('/find', student_controller.find);

router.get('/find/:id', student_controller.findOne);

router.put('/update/:id', student_controller.update);

router.delete('/delete/:id', student_controller.delete);

module.exports = router;
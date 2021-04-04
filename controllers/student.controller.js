const Student = require('../models/student.model');

exports.create = (req, res) => {
  let student = new Student({
    name: req.body.name,
    age: req.body.age,
  });

  student.save((err) => {
    if (err) return next(err);
    else res.send("Student Added Succesfully");
  });

};

exports.find= (req, res) => {
  Student.find((err, students) => {
    if (err) return next(err);
    else res.send(students);
  });
};

exports.findOne = (req, res) => {
  Student.findById(req.params.id, (err, student) => {
    if (err) return next(err);
    else res.send(student);
  });
};

exports.update = (req, res) => {
  Student.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    if (err) return next(err);
    else res.send("Student Updated Succesfully");
  })
}

exports.delete = (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    else res.send("Student Data Deleted Succesfully");
  })
}
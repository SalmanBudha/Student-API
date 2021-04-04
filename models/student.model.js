const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

module.exports = mongoose.model('Student', studentSchema);
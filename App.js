const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const student_route = require('./routes/student.route');

const app = express();

mongoose.connect("mongodb://localhost/studentsDb", {useNewUrlParser : true, useUnifiedTopology : true})
.then(()=>{console.log("Connected to Database")})
.catch((err)=>{
  console.log("Could not connect to database", err);
  process.exit();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/student', student_route);

const port = process.env.port || 3000;
app.listen(port, ()=>{
  console.log(`App is running on port ${port}`);
});

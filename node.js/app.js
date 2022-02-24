const express = require("express");
const fs = require("fs");

const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));

app.get("/api/students", function (req, res) {

  let content = fs.readFileSync("students.json", "utf8");
  let students = JSON.parse(content);
  res.send(students);
});

app.get("/api/students/:id", function(req, res) {

  let id = req.params.id;
  let content = fs.readFileSync("students.json", "utf8");
  let students = JSON.parse(content);
  let student;

  for (let i = 0; i < students.length; i++) {
    if (students[i].id == id) {
      student = students[i];
      break;
    }
  }

  if (student) {
    res.send(student);
  } else {
    res.status(404).send("Студент не найден");
  }

});

app.post("/api/students", jsonParser, function (req, res) {
  
  if (!req.body) res.sendStatus(400);

  let studentName = req.body.name;
  let studentSurname = req.body.surname;
  let studentAge = req.body.age;
  let studentSpeciality = req.body.speciality;

  let student = {name: studentName, surname: studentSurname, age: studentAge, speciality: studentSpeciality};

  let data = fs.readFileSync("students.json", "utf8");
  let students = JSON.parse(data);

  let id = Math.max(...students.map((student) => student.id));
  
  if (Number.isFinite(id)) {
    student.id = id + 1;
  } else {
    student.id = 1;
  }
  
  students.push(student);

  data = JSON.stringify(students);
  fs.writeFileSync("students.json", data);
  res.send(student);
});

app.delete("/api/students/:id", function (req, res) {

  let id = req.params.id;
  let data = fs.readFileSync("students.json", "utf8");
  let students = JSON.parse(data);
  let index = -1;

  for (let i = 0; i < students.length; i++) {
    if (students[i].id == id) {
      index = i;
      break;
    }
  }

  if (index > -1) {
    let student = students.splice(index, 1)[0];
    
    for (let i = 0; i < students.length; i++) {
      students[i].id = i + 1;
    }
    
    let data = JSON.stringify(students);
    fs.writeFileSync("students.json", data);
    res.send(student);
  } 
  else {
    res.status(404).send("Студент не найден");
  }
});

app.put("/api/students", jsonParser, function (req, res) {

  if (!req.body) res.status(400).send("Failed to change");
  
  let studentId = req.body.id;
  let studentName = req.body.name;
  let studentSurname = req.body.surname;
  let studentAge = req.body.age;
  let studentSpeciality = req.body.speciality;

  let data = fs.readFileSync("students.json", "utf8");
  let students = JSON.parse(data);
  let student;

  for (let i = 0; i < students.length; i++) {
    if (students[i].id == studentId) {
      student = students[i];
      break;
    }
  }

  if (student) {
    student.speciality = studentSpeciality;
    student.age = studentAge;
    student.surname = studentSurname;
    student.name = studentName;
    let data = JSON.stringify(students);
    fs.writeFileSync("students.json", data);
    res.send(student);
  } 
  else {
    res.status(404).send(student);
  }
});

app.listen(3000, function() {
  console.log("Server started");
});


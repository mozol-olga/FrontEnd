async function getStudents() {
        
    let response = await fetch("/api/students", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });
    
    let students = await response.json();
    let rows = "";
    
    for (let student of students) {
      rows += row(student);
    }

    tbody = document.querySelector("tbody");
    tbody.insertAdjacentHTML("afterbegin", rows);
  }

  async function getStudent(id) {
    
    let response = await fetch("/api/students/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });
    
    let student = await response.json();
    
    let form = document.forms["studentForm"];
    form.elements["id"].value = student.id;
    form.elements["name"].value = student.name;
    form.elements["surname"].value = student.surname;
    form.elements["age"].value = student.age;
    form.elements["speciality"].value = student.speciality;

  }

  async function createStudent(studentName, studentSurname, studentAge,studentSpeciality) {
    
    let response = await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name: studentName,
        surname: studentSurname,
        age: studentAge,
        speciality: studentSpeciality
      })
    });

    let student = await response.json();
    student.name = studentName;
    student.surname = studentSurname;
    student.age = studentAge;
    student.speciality = studentSpeciality;
    
    reset();

    let tbody = document.querySelector("tbody");
    tbody.insertAdjacentHTML("beforeend", row(student));

  }

  async function editStudent(studentId, studentName, studentSurname, studentAge, studentSpeciality) {

    let response = await fetch("/api/students", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        id: studentId,
        name: studentName,
        surname: studentSurname,
        age: studentAge,
        speciality: studentSpeciality
      })
    });

    let student = await response.json();

    reset();

    let tr = document.querySelector(`tr[data-rowid="${student.id}"]`);
    tr.insertAdjacentHTML("beforebegin", row(student));
    tr.remove();
  }

  async function deleteStudent(id) {

    let response = await fetch("/api/students/" + id, {
      method: "DELETE",
      header: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });

    let student = await response.json();

    let tr = document.querySelector(`tr[data-rowid="${student.id}"]`);
    tr.remove();
  }


  function reset() {
    
    let form = document.forms["studentForm"];
    form.reset();
    form.elements["id"].value = 0;
  }

  function row(student) {

    return `<tr data-rowid="${student.id}">
              <td>${student.id}</td>
              <td>${student.name}</td>
              <td>${student.surname}</td>
              <td>${student.age}</td>
              <td>${student.speciality}</td>
              <td>
                <a class="editLink" data-id="${student.id}">Редактировать</a> |
                <a class="removeLink" data-id="${student.id}">Удалить</a>
              </td>
            </tr>`
  }

  let resetBtn = document.getElementById("reset");

  resetBtn.addEventListener("click", function(event) {
    
    event.preventDefault();
    reset();
  });

  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {

    event.preventDefault();
    let id = this.elements["id"].value;
    let name = this.elements["name"].value;
    let surname = this.elements["surname"].value;
    let age = this.elements["age"].value;
    let speciality = this.elements["speciality"].value;

    if (id == 0) {
      createStudent(name, surname, age, speciality);
    } else {
      editStudent(id, name, surname, age, speciality);
    }
  });

  document.body.addEventListener("click", function(event) {
    
    if (event.target.className != "editLink") return;

    let id = event.target.dataset.id;

    getStudent(id);
  });

  document.body.addEventListener("click", function(event) {

    if (event.target.className != "removeLink") return;

    let id = event.target.dataset.id;

    deleteStudent(id);
  });

  getStudents();
  
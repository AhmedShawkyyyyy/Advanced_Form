let siInputs = document.querySelectorAll(".info input");
let siSelect = document.querySelectorAll(".info select");
let sFirstTerm = document.querySelectorAll("#firstTerm input");
let sSecondTerm = document.querySelectorAll("#secondTerm input");
let studentsArr = JSON.parse(localStorage.getItem("students")) || [];
let showStudents = document.querySelector("#students");
let button = document.querySelector("#submit_student");
// console.log(button);
// console.log(showStudents);

// console.log(siInputs);
// console.log(siSelect);
// console.log(sFirstTerm);
// console.log(sSecondTerm);

// console.log(studentsArr);
// create function //

function AddStudent() {
  let valid = true;
  for (let i = 0; i < siInputs.length; i++) {
    if (siInputs[i].value == "") {
      valid = false;
    }
  }
  for (let i = 0; i < siSelect.length; i++) {
    if (siSelect[i].value == "") {
      valid = false;
    }
  }
  for (let i = 0; i < sFirstTerm.length; i++) {
    if (sFirstTerm[i].value == "Select Gender...") {
      valid = false;
    }
  }
  for (let i = 0; i < sSecondTerm.length; i++) {
    if (sSecondTerm[i].value == "") {
      valid = false;
    }
  }
  if (valid) {
    let student = {
      name: siInputs[0].value,
      email: siInputs[1].value,
      id: siInputs[2].value,
      imgUrl: siInputs[3].value,
      gender: siSelect[0].value,
      year: siSelect[1].value,
      firstTerm: [
        sFirstTerm[0].value,
        sFirstTerm[1].value,
        sFirstTerm[2].value,
        sFirstTerm[3].value,
      ],
      secondTerm: [
        sSecondTerm[0].value,
        sSecondTerm[1].value,
        sSecondTerm[2].value,
        sSecondTerm[3].value,
      ],
    };
    studentsArr.push(student);
    localStorage.setItem("students", JSON.stringify(studentsArr));
    console.log(studentsArr);
    clearInputs();
    printStudent();
  } else {
    alert("Please check and refill  ");
  }
}

// read dunction   //
function printStudent() {
  showStudents.innerHTML = "";
  studentsArr.forEach((element, index) => {
    showStudents.innerHTML += `
                <div class="section flx-nwrp fnt-clr " id="students">
                        <div class="row">
                            <div class="card">
                                <img class="wid1" src="${element.imgUrl}" class="img " alt="">

                                <h4>${element.name}</h4>
                                <p>Email : ${element.email}</p>
                                <p>ID: ${element.id}</p>
                                <p>Year: ${element.year}</p>
                                <p>Gender: ${element.gender}</p>
                            </div>
                        </div>
                        <div class="wid1 table">
                            <table border="2" class="txt-algn wid1 ml-5">
                                <thead>
                                    <tr>
                                        <th colspan="4" class="txt-algn ">First Term</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Subject1</th>
                                        <th>Subject2</th>
                                        <th>Subject3</th>
                                        <th>Subject4</th>

                                    </tr>
                                    <tr>
                                        <td>${element.firstTerm[0]}</td>
                                        <td>${element.firstTerm[1]}</td>
                                        <td>${element.firstTerm[2]}</td>
                                        <td>${element.firstTerm[3]}</td>

                                    </tr>
                                </tbody>
                            </table>
                            <table border="2" class="txt-algn wid1 ml-5">
                                <thead>
                                    <tr>
                                        <th colspan="4" class="txt-algn ">Second Term</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Subject1</th>
                                        <th>Subject2</th>
                                        <th>Subject3</th>
                                        <th>Subject4</th>
                                    </tr>
                                    <tr>
                                        <td>${element.secondTerm[0]}</td>
                                        <td>${element.secondTerm[1]}</td>
                                        <td>${element.secondTerm[2]}</td>
                                        <td>${element.secondTerm[3]} </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="wid1 txt-algn">
                                <button onclick="editStudent(${index})" class="ln-hgt mr-3 mt-4">Edit</button>
                                <button onclick="deleteStudent(${index})" class="ln-hgt mt-4">Delete</button>
                            </div>
                        </div>
                    </div>`;
  });
}

// Delete Function///

function deleteStudent(index) {
  studentsArr.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(studentsArr));
  printStudent();
}

// update or edit///

function editStudent(index) {
  let student = studentsArr[index];
  siInputs[0].value = student.name;
  siInputs[1].value = student.email;
  siInputs[2].value = student.id;
  siInputs[3].value = student.imgUrl;
  siSelect[0].value = student.gender;
  siSelect[1].value = student.year;
  sFirstTerm[0].value = student.firstTerm[0];
  sFirstTerm[1].value = student.firstTerm[1];
  sFirstTerm[2].value = student.firstTerm[2];
  sFirstTerm[3].value = student.firstTerm[3];
  sSecondTerm[0].value = student.secondTerm[0];
  sSecondTerm[1].value = student.secondTerm[1];
  sSecondTerm[2].value = student.secondTerm[2];
  sSecondTerm[3].value = student.secondTerm[3];
  button.innerText = "update";
  button.classList.replace("Submit", "update");
  button.setAttribute("onclick", `updateStudent(${index})`);
}

function updateStudent(index) {
  let valid = true;
  for (let i = 0; i < siInputs.length; i++) {
    if (siInputs[i].value == "") {
      valid = false;
    }
  }
  for (let i = 0; i < siSelect.length; i++) {
    if (siSelect[i].value == "") {
      valid = false;
    }
  }
  for (let i = 0; i < sFirstTerm.length; i++) {
    if (sFirstTerm[i].value == "Select Gender...") {
      valid = false;
    }
  }
  for (let i = 0; i < sSecondTerm.length; i++) {
    if (sSecondTerm[i].value == "") {
      valid = false;
    }
  }
  if (valid) {
    let student = {
      name: siInputs[0].value,
      email: siInputs[1].value,
      id: siInputs[2].value,
      imgUrl: siInputs[3].value,
      gender: siSelect[0].value,
      year: siSelect[1].value,
      firstTerm: [
        sFirstTerm[0].value,
        sFirstTerm[1].value,
        sFirstTerm[2].value,
        sFirstTerm[3].value,
      ],
      secondTerm: [
        sSecondTerm[0].value,
        sSecondTerm[1].value,
        sSecondTerm[2].value,
        sSecondTerm[3].value,
      ],
    };
    studentsArr[index] = student;
    localStorage.setItem("students", JSON.stringify(studentsArr));
    clearInputs();
    printStudent();

    button.innerHTML = "Submit";
    button.classList.replace("update", "Submit");
    button.setAttribute("onclick", `AddStudent(${index})`);
  } else {
    alert("Please check and refill  ");
  }
}

function clearInputs() {
  for (let i = 0; i < siInputs.length; i++) {
    siInputs[i].value = "";
  }
  siSelect[0].value = "Select Gender...";
  siSelect[1].value = "Select Year...";
  for (let i = 0; i < sFirstTerm.length; i++) {
    sFirstTerm[i].value = "";
  }
  for (let i = 0; i < sSecondTerm.length; i++) {
    sSecondTerm[i].value = "";
  }
}
printStudent();

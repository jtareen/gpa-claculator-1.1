let numOfRows = 7;

document.addEventListener('DOMContentLoaded', ()=>{
    applySavedTheme();
    const cgpaForm = document.getElementById('cgpa-calc-form');
    const toggleButton = document.getElementById('toggle-theme');

    cgpaForm.addEventListener('submit', calculateGPA);
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
    }
})

// Function to apply the saved theme
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
}

// Function to toggle the dark mode
function toggleDarkMode() {
    const bodyElement = document.body;
    if (bodyElement.classList.contains('dark-mode')) {
        bodyElement.classList.remove('dark-mode');
        localStorage.setItem('theme', '');
    } else {
        bodyElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
}

function addrow(num = 3) {
    const gpaForm = document.querySelector("#cgpa-calc-form");

    console.log(numOfRows)
    console.log(typeof(numOfRows))

    const table = document.getElementById("table");

    for (let i = 0; i < num; i++) {
        numOfRows += 1;
        let string = '';
        string += numOfRows;

        const no = document.createElement('th');
        no.innerText = string;

        const subNameInput = document.createElement('input');
        subNameInput.type = "text";
        
        const chSlelector = document.createElement('select');
        chSlelector.name = "credit-hours";
        const opt0 = document.createElement('option');
        const opt1 = document.createElement('option');
        const opt2 = document.createElement('option');
        const opt3 = document.createElement('option');
        const opt4 = document.createElement('option');
        const opt5 = document.createElement('option');
        const opt6 = document.createElement('option');
        opt0.value = 0;
        opt1.value = 1;
        opt2.value = 2;
        opt3.value = 3;
        opt4.value = 4;
        opt5.value = 5;
        opt6.value = 6;
        opt0.innerHTML = "select";
        opt1.innerHTML = "1";
        opt2.innerHTML = "2";
        opt3.innerHTML = "3";
        opt4.innerHTML = "4";
        opt5.innerHTML = "5";
        opt6.innerHTML = "6";
        chSlelector.appendChild(opt0);
        chSlelector.appendChild(opt1);
        chSlelector.appendChild(opt2);
        chSlelector.appendChild(opt3);
        chSlelector.appendChild(opt4);
        chSlelector.appendChild(opt5);
        chSlelector.appendChild(opt6);

        const gradeSlelector = document.createElement('select');
        gradeSlelector.name = 'grade';
        const opt00 = document.createElement("option");
        const opt01 = document.createElement("option");
        const opt02 = document.createElement("option");
        const opt03 = document.createElement("option");
        const opt04 = document.createElement("option");
        const opt05 = document.createElement("option");
        const opt06 = document.createElement("option");
        const opt07 = document.createElement("option");
        const opt08 = document.createElement("option");
        opt00.value = 0;
        opt01.value = 4.0;
        opt02.value = 3.5;
        opt03.value = 3.0;
        opt04.value = 2.5;
        opt05.value = 2.0;
        opt06.value = 1.5;
        opt07.value = 1.0;
        opt08.value = 0.0;
        opt00.innerHTML = "select";
        opt01.innerHTML = "A";
        opt02.innerHTML = "B+";
        opt03.innerHTML = "B";
        opt04.innerHTML = "C+";
        opt05.innerHTML = "C";
        opt06.innerHTML = "D+";
        opt07.innerHTML = "D";
        opt08.innerHTML = "F";
        gradeSlelector.appendChild(opt00);
        gradeSlelector.appendChild(opt01);
        gradeSlelector.appendChild(opt02);
        gradeSlelector.appendChild(opt03);
        gradeSlelector.appendChild(opt04);
        gradeSlelector.appendChild(opt05);
        gradeSlelector.appendChild(opt06);
        gradeSlelector.appendChild(opt07);
        gradeSlelector.appendChild(opt08);

        const gradePoints = document.createElement('input');
        gradePoints.type = 'text';
        gradePoints.name = 'grade-points';
        gradePoints.disabled = "true"
        gradePoints.innerHTML = '';

        const col2 = document.createElement('td');
        const col3 = document.createElement('td');
        const col4 = document.createElement('td');
        const col5 = document.createElement('td');

        col2.appendChild(subNameInput);
        col3.appendChild(chSlelector);
        col4.appendChild(gradeSlelector);
        col5.appendChild(gradePoints);

        const row = document.createElement('tr');
        row.appendChild(no);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);

        table.appendChild(row);
    }
}

function calculateGPA(event) {
    event.preventDefault()

    const creditHours = document.getElementsByName('credit-hours');
    const grade = document.getElementsByName('grade');
    const gradePoints = document.getElementsByName('grade-points');
    const gpaResult = document.getElementById('gpa-result');
    const cgpaResult = document.getElementById('cgpa-result');
    const cgpaBefore = document.getElementById('prev-cgpa');
    const creditHoursBefore = document.getElementById('ch-completed');

    let cgpaB = Number(cgpaBefore.value);
    let chB = Number(creditHoursBefore.value);
    let totalCH = 0.0;
    let totalGradePoints = 0.0;
    let gpa = 0.0;
    let cgpa = 0.0;

    let x = 0.0;
    let y = 0.0;
    for (let i = 0; i < creditHours.length; i++) {
        x = Number(grade[i].value);
        y = Number(creditHours[i].value);

        totalCH += y;
        totalGradePoints += x * y;

        gradePoints[i].value = x + " x " + y + " = " + x*y;

    }
    gpa = totalGradePoints / totalCH;

    if (creditHoursBefore.value == '' || cgpaBefore.value == '') {
        cgpa = gpa;
    }
    else {
        cgpa = ((cgpaB * chB) + (totalGradePoints)) / (chB + totalCH);
    }

    gpaResult.value = gpa.toFixed(2);
    cgpaResult.value = cgpa.toFixed(2);
}
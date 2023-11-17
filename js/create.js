function generateRows() {
    const numOfSub = document.getElementsByName('noOfsubjects');

    if (Number(numOfSub[0].value) > 0 && Number(numOfSub[0].value) < 50) {
        addrow(Number(numOfSub[0].value));
    }
    else if (numOfSub[0].value == "") {
        alert("Please enter the number of Total subjects")
    }
    else {
        alert("please enter a valid number for subjects");
    }

}

function addrow(num) {
    const ask = document.querySelector('.ask');
    const container = document.querySelector(".table");

    ask.classList.add('hide');
    container.classList.add('active');
    const table = document.getElementById("table");

    for (let i = 0; i < num; i++) {
        let string = '';
        string += i + 1;
        const no = document.createElement('p');
        no.classList.add('num');
        no.innerHTML = string;

        const subNameInput = document.createElement('input');
        subNameInput.classList.add('box');
        subNameInput.type = "text";

        const chSlelector = document.createElement('select');
        chSlelector.classList.add('box');
        chSlelector.name = "credithours";

        const opt0 = document.createElement('option');
        opt0.value = 0;
        opt0.innerHTML = "select";
        const opt1 = document.createElement('option');
        opt1.value = 1;
        opt1.innerHTML = "1";
        const opt2 = document.createElement('option');
        opt2.value = 2;
        opt2.innerHTML = "2";
        const opt3 = document.createElement('option');
        opt3.value = 3;
        opt3.innerHTML = "3";
        const opt4 = document.createElement('option');
        opt4.value = 4;
        opt4.innerHTML = "4";
        const opt5 = document.createElement('option');
        opt5.value = 5;
        opt5.innerHTML = "5";
        const opt6 = document.createElement('option');
        opt6.value = 6;
        opt6.innerHTML = "6";
        const opt7 = document.createElement('option');
        opt7.value = 7;
        opt7.innerHTML = "7";
        chSlelector.appendChild(opt0);
        chSlelector.appendChild(opt1);
        chSlelector.appendChild(opt2);
        chSlelector.appendChild(opt3);
        chSlelector.appendChild(opt4);
        chSlelector.appendChild(opt5);
        chSlelector.appendChild(opt6);

        const gradeSlelector = document.createElement('select');
        gradeSlelector.classList.add('box');
        gradeSlelector.name = 'Grade';

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
            opt00.innerHTML = "select";
            opt01.value = 4.0;
            opt01.innerHTML = "A";
            opt02.value = 3.5;
            opt02.innerHTML = "B+";
            opt03.value = 3.0;
            opt03.innerHTML = "B";
            opt04.value = 2.5;
            opt04.innerHTML = "C+";
            opt05.value = 2.0;
            opt05.innerHTML = "C";
            opt06.value = 1.5;
            opt06.innerHTML = "D+";
            opt07.value = 1.0;
            opt07.innerHTML = "D";
            opt08.value = 0.0;
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
       

        const output = document.createElement('p');
        output.classList.add('output');
        output.classList.add('box');
        output.innerHTML = '';

        const col1 = document.createElement('td');
        const col2 = document.createElement('td');
        const col3 = document.createElement('td');
        const col4 = document.createElement('td');
        const col5 = document.createElement('td');

        col1.appendChild(no);
        col2.appendChild(subNameInput);
        col3.appendChild(chSlelector);
        col4.appendChild(gradeSlelector);
        col5.appendChild(output);

        const row = document.createElement('tr');
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);

        table.appendChild(row);
    }
}



function calculateGPA() {
    const creditHours = document.getElementsByName('credithours');
    const grade = document.getElementsByName('Grade');
    const point = document.getElementsByClassName('output');
    const cgpaBefore = document.getElementsByName('CGPABefore');
    const creditHoursBefore = document.getElementsByName('creditHoursBefore');
    const gpaResult = document.getElementsByName('GPA');
    const cgpaResult = document.getElementsByName('CGPA');



    let totalCH = 0.0;
    let totalGradePoints = 0.0;
    let cgpaB = Number(cgpaBefore[0].value);
    let chB = Number(creditHoursBefore[0].value);
    let gpa = 0.0;
    let cgpa = 0.0;

    let x = 0.0;
    let y = 0.0;
    for (let i = 0; i < creditHours.length; i++) {
        x = Number(grade[i].value);
        y = Number(creditHours[i].value);

        totalCH += y;
        totalGradePoints += x * y;
        if (x == 0 && y == 0) {
            point[i].innerHTML = "";
        }
        else {
            point[i].innerHTML = x;
        }

    }
    gpa = totalGradePoints / totalCH;
    if (creditHoursBefore[0].value == '' || cgpaBefore[0].value == '') {
        cgpa = gpa;
    }
    else {
        cgpa = ((cgpaB * chB) + (totalGradePoints)) / (chB + totalCH);
    }

    for (let i = 0; i < gpaResult.length; i++) {
        gpaResult[0].value = gpa;
        cgpaResult[0].value = cgpa;
    }
}

function reLoad() {
    location.reload();
}

function reset() {
    const creditHours = document.getElementsByName('credithours');
    const grade = document.getElementsByName('Grade');
    const point = document.getElementsByClassName('output');
    const gpaResult = document.getElementsByName('GPA');
    const cgpaResult = document.getElementsByName('CGPA');
    const cgpaBefore = document.getElementsByName('CGPABefore');
    const creditHoursBefore = document.getElementsByName('creditHoursBefore');

    for (let i = 0; i < grade.length; i++) {
        creditHours[i].value = 0;
        grade[i].value = 0;
        point[i].innerHTML = "";
        gpaResult[0].value = "";
        cgpaResult[0].value = "";
        cgpaBefore[0].value = "";
        creditHoursBefore[0].value = "";
    }

}

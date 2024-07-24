function generateRows(event) {
    let form = event.target;
    let formData = new FormData(form)


    console.log(formData.get('no-of-subjects'))
    addrow(Number(formData.get('no-of-subjects')))
}

function addrow(num) {
    const newRowHtmlContent = `<th>1</th>
                    <td><input type="text"></td>
                    <td><select id="credit-hours" name="credit-hours">
                            <option value="0">select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td><select id="credit-hours" name="credit-hours">
                            <option value="0">select</option>
                            <option value="4.0">A</option>
                            <option value="3.5">B+</option>
                            <option value="3.0">B</option>
                            <option value="2.5">C+</option>
                            <option value="2.0">C</option>
                            <option value="1.5">D+</option>
                            <option value="1.0">D</option>
                            <option value="0">F</option>
                        </select>
                    </td>
                    <td><input type="text"></td>`
    let table = document.querySelector('#gpa-calc-form > table')
    let newRow = document.createElement('tr')
    newRow.innerHTML = newRowHtmlContent;
    for(let i=0;i<num;i++){
        table.appendChild(newRow)
    }
}

function calculateGPA(event) {
    event.preventDefault();
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

/*
document.addEventListener('DOMContentLoaded', ()=>{
    var subNoInpform = document.getElementById('suject-input-form');
    var GpaGradeInpForm = document.getElementById('gpa-calc-form');

    subNoInpform.addEventListener('submit', generateRows)
    GpaGradeInpForm.addEventListener('submit', calculateGPA)
})*/
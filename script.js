function show() {
    let scoreInput = document.getElementById('gradie').value;
    let displayBoard = document.getElementById('boardie');
    if (scoreInput == '') {
        displayBoard.innerHTML = `<h2>Enter something first, man!</h2>`     
    } else if (scoreInput >= 100) {
        displayBoard.innerHTML =  `<h2>This won't work, man!</h2>`
    } else if (scoreInput <= 0) {
        displayBoard.innerHTML = `<h2>Invalid score. Please enter a number between 0 and 100.</h2>`
    } else if (scoreInput >= 70) {
        displayBoard.innerHTML = `<h2>Excellent performance! Your grade is A</h2>`
    } else if (scoreInput >= 60) {
        displayBoard.innerHTML = `<h2>Good job! Your grade is B</h2>`
    } else if (scoreInput >= 50) {
        displayBoard.innerHTML = `<h2>Keep trying! Your grade is C</h2>`        
    } else if (scoreInput >= 40) {
        displayBoard.innerHTML = `<h2>Needs improvement! Your grade is D</h2>`        
    } else if (scoreInput >= 30) {
        displayBoard.innerHTML = `<h2>Fail! Your grade is F</h2>`        
    } else if (scoreInput >= 20) {
        displayBoard.innerHTML = `<h2>Fail! Your grade is F</h2>`        
    } else if (scoreInput >= 10) {
        displayBoard.innerHTML = `<h2>Fail! Your grade is F</h2>`        
    } else {
        displayBoard.innerHTML = `<h2>Invalid! Comot body joor</h2>`        
    }

    }

function showGrade() {
      let scoreInput = document.getElementById('gradie').value;
      let displayBoard = document.getElementById('seeClass');
      let CGPA = scoreInput
      if (CGPA >= 4.50 && CGPA <= 5.0) {
        displayBoard.innerHTML = 'First Class Honours - Outstanding performance!'
      } else if (CGPA >= 3.50 && CGPA < 4.50) {
        displayBoard.innerHTML = 'Second Class Upper Division(2:1)'
      } else if (CGPA >= 2.50 && CGPA < 3.50) {
        displayBoard.innerHTML = 'Second Class Lower Division (2:2)'
      } else if (CGPA >= 1.50 && CGPA < 2.50) {
        displayBoard.innerHTML = 'Third Class'
      } else if (CGPA >= 1.0 && CGPA < 1.50) {
        displayBoard.innerHTML = 'Pass'
      } else if (CGPA >= 0.00 && CGPA < 1.0) {
        displayBoard.innerHTML = 'Fail'
      } else {
        displayBoard.innerHTML = 'Invalid CGPA'
      }
    }

    function showResult() {
      let scoreInput = document.getElementById('gradie').value;
      let displayClass = document.getElementById('seeResult');
      let CGPA = scoreInput
      if (CGPA >= 3.50 && CGPA <= 4.00) {
      displayClass.innerHTML = 'Distinction'
    } else if (CGPA >= 3.00 && CGPA < 3.50) {
      displayClass.innerHTML = 'Upper Credit'
    } else if (CGPA >= 2.50 && CGPA < 3.00) {
      displayClass.innerHTML = 'Lower Credit'
    } else if (CGPA >= 2.00 && CGPA < 2.50) {
      displayClass.innerHTML = 'Pass'
    } else if (CGPA >= 0.00 && CGPA < 2.00) {
      displayClass.innerHTML = 'Fail'
    } else {
      displayClass.innerHTML = 'Invalid CGPA'
     }
    }


// Function to calculate grade and GPA
function calculateGradeAndGPA(totalMarks) {
  let grade = '';
  let gpa = '';

  if (totalMarks >= 90) {
    grade = 'A+';
    gpa = '4.0';
  } else if (totalMarks >= 80) {
    grade = 'A';
    gpa = '3.7';
  } else if (totalMarks >= 70) {
    grade = 'B+';
    gpa = '3.3';
  } else if (totalMarks >= 60) {
    grade = 'B';
    gpa = '3.0';
  } else if (totalMarks >= 50) {
    grade = 'C';
    gpa = '2.7';
  } else if (totalMarks >= 40) {
    grade = 'D';
    gpa = '2.0';
  } else {
    grade = 'F';
    gpa = '0.0';
  }

  return { grade, gpa };
}

// Function to display student details
function displayStudentDetails(event) {
  event.preventDefault();

  const name = document.getElementById('nameInput').value;
  const rollNumber = document.getElementById('rollNumberInput').value;

  const subjects = {
    computerNetworks: 85,
    computerGraphics: 78,
    webTechnology: 92,
    graphTheory: 80,
  };

  const totalMarks = Object.values(subjects).reduce((acc, curr) => acc + curr, 0);
  const { grade, gpa } = calculateGradeAndGPA(totalMarks);

  const studentDetailsDiv = document.getElementById('studentDetails');

  studentDetailsDiv.innerHTML = `
    <h2>Student Details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Roll Number:</strong> ${rollNumber}</p>
    <p><strong>Computer Networks:</strong> ${subjects.computerNetworks}</p>
    <p><strong>Computer Graphics:</strong> ${subjects.computerGraphics}</p>
    <p><strong>Web Technology:</strong> ${subjects.webTechnology}</p>
    <p><strong>Graph Theory:</strong> ${subjects.graphTheory}</p>
    <p><strong>Total Marks:</strong> ${totalMarks}</p>
    <p><strong>Grade:</strong> ${grade}</p>
    <p><strong>GPA:</strong> ${gpa}</p>
  `;

  studentDetailsDiv.style.display = 'block';
}

document.getElementById('studentForm').addEventListener('submit', displayStudentDetails);

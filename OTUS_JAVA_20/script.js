function addStudent() {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const dob = new Date(document.getElementById('dob').value);
  const gender = document.getElementById('gender').value;
  const age = calculateAge(dob);
  
  const table = document.getElementById('student-table').getElementsByTagName('tbody')[0];
  const row = table.insertRow(-1);
  const nameCell = row.insertCell(0);
  const genderCell = row.insertCell(1);
  const dobCell = row.insertCell(2);
  const ageCell = row.insertCell(3);
  
  nameCell.innerHTML = name;
  genderCell.innerHTML = gender;
  dobCell.innerHTML = dob.toLocaleDateString();
  ageCell.innerHTML = age;
  
  updateAverageAge();
  
  document.getElementById('name').value = '';
  document.getElementById('dob').value = '';
  document.getElementById('gender').selectedIndex = 0;
}

function calculateAge(dob) {
  const diff = Date.now() - dob.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function updateAverageAge() {
  const table = document.getElementById('student-table');
  const tbody = table.getElementsByTagName('tbody')[0];
  const rowCount = tbody.rows.length;
  let totalAge = 0;
  for (let i = 0; i < rowCount; i++) {
    const age = parseInt(tbody.rows[i].cells[3].innerHTML);
    totalAge += age;
  }
  const averageAge = totalAge / rowCount;
  document.getElementById('average-age').innerHTML = averageAge.toFixed(0);
}
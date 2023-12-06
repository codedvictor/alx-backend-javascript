interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: 'Victor',
  lastName: 'Ige',
  age: 31,
  location: 'Lekki',
}

const secondStudent: Student = {
  firstName: 'Goodnews',
  lastName: 'Ayankoya',
  age: 28,
  location: 'Ikeja',
}

const studentsList: Student[] = [firstStudent, secondStudent];

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);

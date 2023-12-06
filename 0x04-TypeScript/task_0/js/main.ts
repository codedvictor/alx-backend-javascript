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

const studentsList: Student[] = [s1, s2];

const vanTable = document.createElement('table');

studentsList.forEach((student) => {
  const row = vantable.insertRow();
  const cell1 = xrow.insertCell(0);
  const cell2 = xrow.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(vantable);

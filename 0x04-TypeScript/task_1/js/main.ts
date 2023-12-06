interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

class ClassTeacher implements Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  constructor(teacher: Teacher) {
    this.firstName = teacher.firstName;
    this.lastName = teacher.lastName;
    this.fullTimeEmployee = teacher.fullTimeEmployee;
    this.yearsOfExperience = teacher.yearsOfExperience;
    this.location = teacher.location;

    // Add any additional attribute dynamically
    for (const key in teacher) {
      if (!['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key)) {
        this[key] = teacher[key];
      }
    }
  }
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const instantiatedTeacher: TeacherClass = new ClassTeacher(teacher3);

console.log(instantiatedTeacher);

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

const instantiatedTeacher: TeacherClass = new ClassTeacher(teacher);

console.log(instantiatedTeacher);

//Extend director to number of reports
interface Directors extends Teacher {
  numberOfReports: number;
}

class classDirector extends ClassTeacher implements Directors {
  numberOfReports: number;

  constructor(director: Directors) {
    super(director);
    this.numberOfReports = director.numberOfReports;
  }
}

const director: Directors = {
  firstName: 'Alice',
  fullTimeEmployee: true,
  lastName: 'Smith',
  location: 'New York',
  numberOfReports: 5,
  additionalAttribute: 'additionalValue', // Example of an additional attribute
};

const instantiatedDirector: ClassDirector = new ClassDirector(director);

console.log(instantiatedDirector);

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
};

// Example usage:
const result: string = printTeacher("John", "Doe");
console.log(result); // Output: J. Doe

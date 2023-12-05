export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentGrade = studentList
    .filter((studentFilter) => studentFilter.location === city)
    .map((studentFilter) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === studentFilter.id);
      return {
        ...studentFilter,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
  return studentGrade;
}

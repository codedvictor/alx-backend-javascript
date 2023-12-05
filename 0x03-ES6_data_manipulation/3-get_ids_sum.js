export default function getStudentIdsSum(studentList) {
  const studentSum = studentList.reduce((accumulator, student) => accumulator + student.id, 0);

  return studentSum;
}

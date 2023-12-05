export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  const studentId = studentList.map((studentArray) => studentArray.id);

  return studentId;
}

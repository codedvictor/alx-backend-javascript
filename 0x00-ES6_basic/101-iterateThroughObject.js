export default function iterateThroughObject(reportWithIterator) {
  let allEmployee = '';
  for (const [x, emp] of Object.entries(reportWithIterator)) {
    allEmployee += `${emp}`;
    if (parseInt(x, 10) !== reportWithIterator.length - 1) {
      allEmployee += ' | ';
    }
  }
  return allEmployee;
}

export default function appendToEachArrayValue(array, appendString) {
  const value = [];
  for (let idx of array) {
    value.push(appendString + idx);
  }

  return value;
}

export default function hasValuesFromArray(set, array) {
  const valueset = array.every((setvalue) => set.has(setvalue));

  return valueset;
}

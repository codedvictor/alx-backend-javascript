export default function cleanSet(set, startString) {
  if (startString.length === 0 || !startString) return '';
  const valueFilter = [...set]
    .filter((valueset) => valueset && valueset.startsWith(startString))
    .map((valueset) => valueset.replace(startString, ''))
    .join('-');

  return valueFilter;
}

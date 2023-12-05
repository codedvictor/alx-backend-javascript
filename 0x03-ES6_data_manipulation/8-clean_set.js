export default function cleanSet(set, startString) {
  const valueFilter = Array.from(set)
    .filter((valueset) => valueset.startsWith(startString))
    .map((valueset) => valueset.substring(startString.length))
    .join('-');

  return valueFilter;
}

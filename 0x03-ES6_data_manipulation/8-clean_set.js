export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString === undefined)
    return '';

  const valueFilter = Array.from(set)
    .filter((valueset) => (valueset === undefined ? '' : valueset.startsWith(startString)))
    .map((valueset) => (valueset === undefined ? '' : valueset.replace(startString, '')))
    .join('-');

  return valueFilter;
}

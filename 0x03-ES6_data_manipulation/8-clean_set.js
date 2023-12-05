export default function cleanSet(set, startString) {
  let valueFilter = '';
  if (startString.length === 0 || !startString) return '';
  valueFilter = [...set]
    .filter((valueset) => (valueset === undefined ? '' : valueset.startsWith(startString)))
    .map((valueset) => (valueset === undefined ? '' : valueset.replace(startString, '')))
    .join('-');

  return valueFilter;
}

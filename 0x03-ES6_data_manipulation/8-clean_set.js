export default function cleanSet(set, startString) {
  let valueFilter = '';
  if (startString.length === 0 || startString === undefined) return '';
  valueFilter = [...set]
    .filter((vls) => (vls === undefined ? '' : vls.startsWith(startString)))
    .map((vls) => (vls === undefined ? '' : vls.replace(startString, '')))
    .join('-');

  return valueFilter;
}

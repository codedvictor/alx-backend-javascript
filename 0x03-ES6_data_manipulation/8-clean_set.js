export default function cleanSet(set, startString) {
  let valueFilter = '';
  if (startString.length === 0 || !startString) return '';
  valueFilter = [...set]
    .filter((vlst) => (vlst === undefined ? '' : vlst.startsWith(startString)))
    .map((vlst) => (vlst === undefined ? '' : vlst.replace(startString, '')))
    .join('-');

  return valueFilter;
}

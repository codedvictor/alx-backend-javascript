export default function cleanSet(set, startString) {
  let nString = '';
  if (startString === undefined || startString.length === 0) return '';
  nString = [...set]
    .filter((vls) => (vls === undefined ? '' : vls.startsWith(startString)))
    .map((vls) => (vls === undefined ? '' : vls.replace(startString, '')))
    .join('-');
  return nString;
}

export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buff = new ArrayBuffer(length);
  const dtView = new DataView(buff);
  dtView.setInt8(position, value);

  return dtView;
}

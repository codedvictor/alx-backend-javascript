export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const numbering = weakMap.get(endpoint);
    weakMap.set(endpoint, numbering + 1);

    if (numbering + 1 >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}

export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [items, quantity] of groceries) {
    if (quantity === 1) {
      groceries.set(items, 100);
    }
  }
}

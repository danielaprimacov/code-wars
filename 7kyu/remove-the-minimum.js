function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  const idx = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, i) => i !== idx);
}

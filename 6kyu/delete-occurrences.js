function deleteNth(arr, n) {
  const seen = Object.create(null);
  return arr.filter((v) => (seen[v] = (seen[v] || 0) + 1) <= n);
}

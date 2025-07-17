function tribonacci(signature,n){
  // If no elements are requested, return an empty array
  if (n === 0) return [];
  // If fewer than 3 elements are requested, just return that many from the signature
  if (n < 3) return signature.slice(0, n);

  // Start with a copy of the full signature
  const result = signature.slice();

  // Build the sequence up to n elements
  for (let i = 3; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2] + result[i - 3];
  }

  return result;
}
function dnaStrand(dna) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  return [...dna].map((c) => pairs[c]).join("");
}

function getGrade (s1, s2, s3) {
  // Code here
  let average = (s1 + s2 + s3)/3;
  switch (true) {
    case average >= 90: return 'A';
    case average >= 80: return 'B';
    case average >= 70: return 'C';
    case average >= 60: return 'D';
    default: return 'F';
  }
}
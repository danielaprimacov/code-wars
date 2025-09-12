const likes = (n) =>
  [
    "no one likes this",
    `${n[0]} likes this`,
    `${n[0]} and ${n[1]} like this`,
    `${n[0]}, ${n[1]} and ${n[2]} like this`,
    `${n[0]}, ${n[1]} and ${n.length - 2} others like this`,
  ][Math.min(4, n.length)];

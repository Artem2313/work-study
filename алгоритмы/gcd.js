const gcd = (x, y) => {
  if (x === 0 && y === 0) return 0;
  if(y === 0) return x;
  return gcd(y, x%y);
}

console.log(gcd(9,30));
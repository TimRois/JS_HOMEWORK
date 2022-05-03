var a = 28,
  b = 79,
  c;

console.log("a =", a);
console.log("b =", b);

c = a;
a = b;
b = c;

console.log("a =", a);
console.log("b =", b);

a = a + b;
b = a - b;
a = a - b;

console.log("a =", a);
console.log("b =", b);

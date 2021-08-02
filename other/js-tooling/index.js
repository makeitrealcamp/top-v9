const foo = 'foo';

const arr = Array.from({ length: 100 }, () => ({ name: 'maria', age: 24 }))
  .filter((el) => el.age > 24)
  .map((el) => el.age * 2)
  .every((el) => el === 24);

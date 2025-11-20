// складний відсоток
const sum = 100; // початкова сума
const interestRate = 6; // 6% річних
const period = 60; // 5 років

const result = sum * Math.pow(1 + interestRate / 100 / 12, period);
console.log(`Початкова сума ${sum}`);
console.log(`Річна ставка ${interestRate}%`);
console.log(`Сума через ${period} місяців ${result}`);
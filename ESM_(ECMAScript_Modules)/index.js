import { students, number } from './src/students.js';
import fetchProducts, { fetchMewtwo } from './utils/fetch.js';
import * as calc from './src/math.js';

console.table(students);
console.log(number);

console.log(calc.add(10, 10));
console.log(calc.subtract(100, 1));
console.log(calc.multiply(10, 10));
console.log(calc.divide(100, 10));

// console.log(Math.floor(Math.random() * 5));

fetchProducts();
fetchMewtwo();

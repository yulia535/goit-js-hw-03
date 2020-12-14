// Напиши функцію countTotalSalary(employees)
// приймаючу об'єкт зарплат. Функція рахує загальну
// суму зарплати працівників і повертає її.Кожне поле
// об'єкта, переданого в функцію, має вигляд "ім'я": "зарплата".

const countTotalSalary = function (employees) {
  // твій код
  let totalSalary = 0;
  const salaries = Object.values(employees);
  for (const salary of salaries) {
    totalSalary += salary;
  }
  return totalSalary;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

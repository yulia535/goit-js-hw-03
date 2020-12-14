// Напиши функцію countProps(obj), яка рахує кількість властивостей
// в об'єкті. Функція повертає число - кількість властивостей.

// const countProps = function (obj) {
//   let propCount = 0;
//   for (const value in obj) {
//     if (obj.hasOwnProperty(value)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// };

function countProps(obj) {
  let propCount = 0;
  const values = Object.values(obj);

  for (const value of values) {
    propCount += 1;
  }

  return propCount;
}

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

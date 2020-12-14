// Напиши функцію calculateTotalPrice(allProdcuts, productName),
// яка отримує масив об'єктів та ім'я продукту
// (значення властивості name).Повертає загальну вартість
// продукту(ціна * кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  // твій код
  let total = 0;
  for (const product of allProdcuts) {
    if (product.name === productName) {
      total = product.price * product.quantity;
      return total;
    }
  }
  return total;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроїд')); // 2800
console.log(calculateTotalPrice(products, 'Сканер')); //8100
console.log(calculateTotalPrice(products, 'Захоплення')); //2400

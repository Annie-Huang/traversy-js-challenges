function calculateTotalSalesWithTax(products, taxRate) {
  return (
    products.reduce((accumulator, currentValue) => {
      return currentValue.price * currentValue.quantity + accumulator;
    }, 0) * (1 + taxRate * 0.01).toFixed(2)
  );
}

module.exports = calculateTotalSalesWithTax;

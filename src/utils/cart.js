export const calculateTotalPrice = (products) => {
  console.log({products})
  return products.reduce((acc, current) => acc + current.price, 0)
}

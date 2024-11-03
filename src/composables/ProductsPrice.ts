interface IProducts {
  product?: string
  price: number
}

export function useProductsPrice() {
  const products: IProducts[] = [
    { product: 'Apple', price: 2 },
    { product: 'Orange', price: 3 },
    { product: 'Banana', price: 1 },
  ]

  function sortAplication(a: IProducts, b: IProducts): number {
    return a.price - b.price
  }

  const sortedProducts = products.sort(sortAplication)

  return {
    sortedProducts,
  }
}

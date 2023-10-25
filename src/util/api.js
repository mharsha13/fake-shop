const fetchProducts = async (count) => {
  const products = []

  for (let i = 1; i <= count; i++) {
    const productsUrl = `https://fakestoreapi.com/products/${i}`
    const response = await fetch(productsUrl)
    const product = await response.json()
    const id = product.id
    const title = product.title
    const price = product.price
    const image = product.image
    products.push({ id, title, price, image })
  }

  return products
}

export default fetchProducts

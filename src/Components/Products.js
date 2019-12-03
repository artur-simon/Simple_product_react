import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`
      )
      setProducts([...products, ...response.data.products])
    }
    fetchData()
  }, [page])

  function LoadMoreProducts(number) {
    setPage(page + number)
  }

  return (
    <div className="App">
      <h2>Sua seleção especial</h2>
      <div className="products">
        {products.map(product => (
          <ProductCard item={product} product={product} />
        ))}
      </div>
      <input
        className="loadPageButton"
        type="button"
        value="Ainda mais produtos aqui!"
        onClick={() => LoadMoreProducts(1)}
      ></input>
    </div>
  )
}
export default Products

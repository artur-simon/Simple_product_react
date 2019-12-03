import React from 'react'

const formatPrice = (price = 0) => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

const ProductCard = props => {
  return (
    <div className="productCard">
      <img src={props.product.image} alt="placeholder"></img>
      <p>{props.product.name}</p>
      <h3 className="textDescription">{props.product.description}</h3>
      <h3>De: {formatPrice(props.product.oldPrice)}</h3>
      <h4>Por: {formatPrice(props.product.price)}</h4>
      <h3>
        ou {props.product.installments.count}x de{' '}
        {formatPrice(props.product.installments.value)}
      </h3>
      <button type="button" class="buyButton">
        Comprar
      </button>
    </div>
  )
}

export default ProductCard

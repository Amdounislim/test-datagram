import React from 'react'
import './style.css'

const ProductCard = ({ prod, withDetails = false }) => {
  return (
    <li className='productCard'>
      <h1>{prod.title}</h1>
      <span className='avatar'>
        <img src={prod.image} alt={prod.title} width='200' />
        <div className='text'>
          <h3>{prod.title}</h3>
          <p>{prod.description}</p>
        </div>
      </span>
      <div className='prices'>
        <h4>price : ${prod.price}</h4>
        <h5>rate:{prod.rating.rate}</h5>
        <h5>count:{prod.rating.count}</h5>
      </div>
      {!withDetails && (
        <div className='action'>
          <i className='bx bxs-edit'></i>
          <i className='bx bxs-trash'></i>
        </div>
      )}
    </li>
  )
}

export default ProductCard

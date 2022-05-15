import React from 'react'
import EditProduct from '../AddProduct'
import './style.css'

const ProductCard = ({
  prod,
  withDetails = false,
  removeProductById,
  editProduct,
}) => {
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

        {prod.rating && (
          <>
            <h5>rate:{prod.rating.rate}</h5>
            <h5>count:{prod.rating.count}</h5>
          </>
        )}
      </div>
      {!withDetails && (
        <div className='action'>
          <EditProduct
            editProduct={editProduct}
            isEdit={true}
            formToEdit={prod}
          />
          <i
            className='bx bxs-trash'
            onClick={() => removeProductById(prod.id)}
          ></i>
        </div>
      )}
    </li>
  )
}

export default ProductCard

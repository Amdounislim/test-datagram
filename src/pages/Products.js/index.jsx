import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { editProduct, queryProducts ,  deleteProduct, addProduct  } from '../../services/storeApi'
import Spinner from '../../components/Spinner'
import ProductCard from '../../components/ProductCard'
import AddProduct from '../../components/AddProduct'
import './style.css'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const getProducts = async () => {
    const products = await queryProducts()
    setProducts(products)
    setLoading(false)
  }

  const addNewProduct = async (form) => {
    try {
      const res = await addProduct(form)


      setProducts([res, ...products])
    } catch (error) {
      alert(error.message)
    }
  }


  const editProductForm = async (form) => {

    const res = await editProduct(form)

    setProducts(products.map(el => el.id === res.id ? res : el ))


  }

  const removeProductById = async (id) => {
    const confirmlDelete = window.confirm('Are you sure you want to delete')
    if (!confirmlDelete) return
    try {
      await deleteProduct(id)
      setProducts(products.filter((prod) => prod.id !== id))
      // alert('Product Deleted with success')
    } catch (error) {
      alert('Product Delete failed')
    }
  }

  useEffect(() => {
    getProducts()
  }, [navigate])

  return (
    <section id='content'>
      <main>
        <h1>Products</h1>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <AddProduct addProduct={addNewProduct} />
            <ul className='categories'>
              {products.map((prod) => (
                <ProductCard
                  prod={prod}
                  key={prod.id}
                  removeProductById={removeProductById}
                  editProduct={editProductForm}
                />
              ))}
            </ul>
          </>
        )}
      </main>
    </section>
  )
}

export default Products

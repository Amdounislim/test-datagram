import React, { useEffect, useState } from 'react'
import Modal from '../Modal'

import './style.css'

const initForm = {
  title: '',
  price: '',
  description: '',
  image: '',
  category: '',
}

const AddProduct = ({
  formToEdit = null,
  addProduct = () => {},
  editProduct = () => {},
  isEdit = false,
}) => {
  const [form, setForm] = useState(initForm)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    isEdit && setForm(formToEdit)
  }, [isEdit, formToEdit])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const resetForm = () => setForm(initForm)
  const setIsOpen = (value) => setIsShow(value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isEdit) {
      editProduct(form)
    } else {
      addProduct(form)
    }
    resetForm()
    setIsOpen(false)
  }

  return (
    <div>
      <i
        class={isEdit ? 'bx bxs-edit' : 'bx bxs-comment-add'}
        onClick={() => setIsOpen(true)}
      ></i>
      <Modal isOpen={isShow} setIsOpen={setIsOpen}>
        <form
          onSubmit={handleSubmit}
          style={{ background: 'white', padding: '1rem' }}
        >
          <h3>{isEdit ? 'Edit' : 'Add'} Product</h3>
          <div className='txt_field'>
            <input
              value={form.title}
              type='text'
              required
              onChange={handleChange}
              name='title'
            />
            <label>title</label>
          </div>
          <div className='txt_field'>
            <input
              value={form.price}
              type='text'
              required
              onChange={handleChange}
              name='price'
            />
            <label>price</label>
          </div>
          <div className='txt_field'>
            <input
              value={form.description}
              type='text'
              required
              onChange={handleChange}
              name='description'
            />
            <label>description</label>
          </div>
          <div className='txt_field'>
            <input
              type='text'
              value={form.image}
              required
              onChange={handleChange}
              name='image'
            />
            <label>image</label>
          </div>
          <div className='txt_field'>
            <input
              value={form.category}
              type='text'
              required
              onChange={handleChange}
              name='category'
            />
            <label>category</label>
          </div>

          <input type='submit' value='Submit' />
        </form>
      </Modal>
    </div>
  )
}

export default AddProduct

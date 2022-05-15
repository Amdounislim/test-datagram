import axios from 'axios'

const api = axios.create({ baseURL: 'https://fakestoreapi.com' })

/**
 * @description POST /auth/login
 */
export const login = async (username = 'mor_2314', password = '83r5^_') => {
  const { data } = await api.post('/auth/login', { username, password })

  localStorage.setItem('token', data.token)

  return data.token
}

const queryData = async (dataPath, params = {}) => {
  const { id = null, sort, limit = 10 } = params
  try {
    let request = dataPath
    if (id) {
      request += `/${id}`
    }
    const res = await api.get(request, { params: { sort, limit } })
    return res.data
  } catch (error) {}
}

/**
 * @description GET /users
 * @param {{id:string , sort:'asc' | 'desc' , limit : string}} params
 */
export const queryUsers = async (params) => queryData('/users', params)

/**
 * @description GET /carts
 * @param {{id:string , sort:'asc' | 'desc' , limit : string}} params
 */
export const queryCarts = async (params) => queryData('/carts', params)

/**
 * @description GET /products
 * @param {{id:string , sort:'asc' | 'desc' , limit : string}} params
 */
export const queryProducts = async (params) => queryData('/products', params)

/**
 * @description GET /products/categories
 * @param {{id:string , sort:'asc' | 'desc' , limit : string}} params
 */
export const queryCategories = async (params) =>
  queryData('/products/categories', params)

/**
 * @description Delete product/users/id
 */
export const deleteProduct = async (id) => {
  try {
    const res = await api.delete(`/products/${id}`)
    return res.data
  } catch (error) {}
}

/**
 * @description sort user /users?sort=desc
 */
export const sortUser = async (id) => {
  try {
    const res = await api.get(`/users?sort=desc`)
    return res.data
  } catch (error) {}
}

/**
 * @description POST PRODUCT /products
 */
export const addProduct = async (form) => {
  const res = await api.post('/products', form)
  return res.data
}
/**
 * @description PUT PRODUCT /products/:id
 */
export const editProduct = async (form) => {
  const res = await api.put(`/products/${form.id}`, form)
  return res.data
}

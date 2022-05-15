import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import Spinner from '../../components/Spinner'
import { queryCategories } from '../../services/storeApi'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [loading,setLoading] = useState(true)

    const navigate = useNavigate()

    const getCategories = async () => {
        const users = await queryCategories()
        setCategories(users)
        setLoading(false)
      }
  return (
    <div>Categories</div>
  )
}

export default Categories
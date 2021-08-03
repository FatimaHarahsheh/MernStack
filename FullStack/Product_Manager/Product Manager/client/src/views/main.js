import React,{useState,useEffect} from 'react'
import  ProductForm from '../components/productForm'
import Displayproduct from '../components/displayproduct'
import axios from 'axios';
export default () => {
    const [Products,setProduct] = useState([])
    useEffect(() => {
      axios.get('http://localhost:8000/api/products')
      .then(res => {setProduct(res.data)});

  })
    return (
        <div>
        <ProductForm />
        <Displayproduct Products={Products}/>
        </div>
    )
 }
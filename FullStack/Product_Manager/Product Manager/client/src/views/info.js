import React,{useState,useEffect} from 'react'
import axios from 'axios';


export default props => {
    const [Products,setProduct] = useState([])
    useEffect(() => {
      axios.get(`http://localhost:8000/api/products/${props.id}`)
      .then(res => setProduct(res.data));


  },[])
  console.log(props.id)
    return (
        <div>
            <p>{Products.title}</p>
            <p>{Products.desc}</p>
            <p>{Products.price}</p>


        </div>
    )
 }
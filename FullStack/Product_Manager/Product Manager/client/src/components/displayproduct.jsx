import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import { useEffect,useState } from 'react';
import DeleteButton from './basics/deletecomponents';
export default props => {
    const [Products,setProduct] = useState([])
    useEffect(() => {
      axios.get('http://localhost:8000/api/products')
      .then(res => {setProduct(res.data)});

  },[])
  const removeFromDom = productId => {
    setProduct(Products.filter(product => product._id !== productId))
}
    return (
        <div>
            <h2>All Products: </h2>
        {Products.map((product, id) => {
                return (
                    <div key={id}>
                            <Link to ={"/"+product._id}>
                            <h3>{product.title}</h3> 
                            <br></br>
                            </Link>
                            <Link to={"/" + product._id + "/edit"}>
                            Edit
                        </Link> 

                            <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>

                    </div>
                )
            })}
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate,Link } from '@reach/router';
import ProductForm from '../components/productForm';
import DeleteButton from '../components/basics/deletecomponents';



export default props => {

    const {id} = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        })
    }, []);

    const updateProduct = (prod) => {
        axios.put(`http://localhost:8000/api/products/${id}` , prod)
        .then(res => console.log(res));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <div>
                    <ProductForm 
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.desc}
                    />
                    <DeleteButton 
                    productId={product._id} 
                    successCallback={() => navigate("/")} 
                    />
                </div>
            )}
            <br/><br/><Link to={`/`}>Home</Link>
        </div>
    )
}

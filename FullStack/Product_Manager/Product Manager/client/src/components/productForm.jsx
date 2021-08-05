import React, { useState } from  'react';
import axios from 'axios';

export const ProductForm = (props) => {
    const {initialtitle, initialprice, initialdesc, onSubmitProp} = props;
    const [title, setTitle] = useState(initialtitle);
    const [titleErr, setTitleErr] = useState("");
    const [price, setPrice] = useState(initialprice);
    const [priceErr, setPriceErr] = useState("");
    const [desc, setDesc] = useState(initialdesc);
    const [descErr, setDescErr] = useState("");
    const [submitErr, setSubmitErr] = useState("");
    
    const titleErrMesgs = {
        empty: "title cannot be empty",
        minLength: "title have to be 3 char or more"
    };

    const descErrMesgs = {
        empty: "description cannot be empty",
        minLength: "description have to be 3 char or more"
    };

    const priceErrMesgs = {
        empty: "Price cannot be empty",
        minPrice: "Price should be more than 10."
    };

    const submitErrMesgs = {
        noSubmit: "Please fix the errors above before submitting the form"
    };
    
    const createProduct = (e) => {
        e.preventDefault();
        // if(validateTitle(title) && validatePrice(price) && validateDesc(desc)){
        //     const newProduct = {title: title,desc:desc, price: price};
        //     axios.post('http://localhost:8000/api/products/new', newProduct)
        //     .then(res=> {
        //         setTitle("");
        //         setDesc("");
        //         setPrice("");
        //         setSubmitErr("");
        //     })
        //     .catch(err => {
        //         const errStr =  err.response.data.error.errors.title.message + ", " 
        //         + err.response.data.error.errors.price.message + ", " 
        //         + err.response.data.error.errors.desc.message;
        //         setSubmitErr(errStr);
        //     })
        // } else {
        //     setSubmitErr(submitErrMesgs.noSubmit);
        // }
        onSubmitProp({title,price,desc})
    };

    const validateTitle = (value) => {
        setTitle(value);
        if(value.length < 1) {
            setTitleErr(titleErrMesgs.empty);
            return false;
        } else if (value.length < 3) {
            setTitleErr(titleErrMesgs.minLength);
            return false;
        } else {
            setTitleErr("");
            return true;
        }
    };

    const validateDesc = (value) => {
        setDesc(value);
        if(value.length < 1) {
            setDescErr(descErrMesgs.empty);
            return false;
        } else if (value.length < 3) {
            setDescErr(descErrMesgs.minLength);
            return false;
        } else {
            setDescErr("");
            return true;
        }
    };

    const validatePrice = (value) => {
        setPrice(value); 
        if(value.length < 1) {
            setPriceErr(priceErrMesgs.empty);
            return false;
        } else if (!isNaN(value) && parseInt(value) < 10) {
            setPriceErr(priceErrMesgs.minAge);
            return false;
        } else {
            setPriceErr("");
            return true;
        }
    };

    return(
        <form onSubmit={ createProduct } className={props.className}>
                <h1>Product Manager</h1>

            <div>

                <input placeholder="Title" type="text" onChange={ (e) => validateTitle(e.target.value)} value={title} />
                {
                    titleErr && 
                    <p style={{color: 'red'}}>{titleErr}</p>
                }
            </div>
            <div>
                <input placeholder="Price" type="number" onChange={ (e) => validatePrice(e.target.value) } value={price}/>
                {
                    priceErr && 
                    <p style={{color: 'red'}}>{priceErr}</p>
                }
            </div>
            <div>
                <input placeholder="Desc" type="text" onChange={ (e) => validateDesc(e.target.value)} value={desc} />
                {
                    descErr && 
                    <p style={{color: 'red'}}>{descErr}</p>
                }
            </div>
            <input type="submit" value="Create Product" />
            {
                submitErr && 
                <p style={{color: 'red'}}>{submitErr}</p>
            }
        </form>
    );
};
export default ProductForm
import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import { useEffect,useState } from 'react';

export default props => {
    return (
        <div>
            <h2>All Products: </h2>
        {props.Products.map((product, id) => {
                return (
                    <div key={id}>
                            <Link to ={"/"+product._id}>
                            <h3>{product.title}</h3> 
                            </Link>
                    </div>
                )
            })}
        </div>
    )
}
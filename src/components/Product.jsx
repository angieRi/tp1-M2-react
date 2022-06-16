import React from "react";

function Product(props){
    const {name,description,price,sku,amount} = props;
    return(
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>$ {price}</p>
            <p>{sku}</p>
            <p>{amount}</p>
        </div>
    )
}
export default Product
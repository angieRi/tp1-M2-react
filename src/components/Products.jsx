import React, {useState,useEffect} from "react";
import Product from "./Product";

function Products() {
    const [loading, setloding] = useState(true)
    const [products, setProducts] = useState([])
    const [buy,setBuy] = useState(false)

    useEffect(
        () => {
            setTimeout(() => {
                setProducts([
                    {
                        name: "Cargador Tipo C",
                        description: "Cargador para celulares, carga rápida",
                        price: 1200,
                        sku: 12,
                        amount: 23

                    }
                ])
                setloding(false)
            }, 2000)
         },
        []
    )

    const handleClick = () => {
        setBuy(true)
    }
    if(loading){
        return(<div>Cargando...</div>)
    }else{
        const title = "Lista de Productos"
        return (
            <div>
                <h1>{title}</h1>
                {products.map(dataProduct=><Product
                    name={dataProduct.name} description={dataProduct.description}
                    price={dataProduct.price}   sku={"sku: " + dataProduct.sku} amount={"Cantidad: "+ dataProduct.amount} />)}
                <button onClick={handleClick}>Comprar</button>
                <p>{buy ? 'Gracias por su compra' : ' '}</p>

            </div>
        )
    }

}
export default Products

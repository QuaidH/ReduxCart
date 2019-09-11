import React from "react"
import { useSelector } from "react-redux"

import ProductCard from "../components/ProductCard";


const Home = () =>  {
    const products = useSelector(state => state.products.products)

    const renderProducts =() => {
        return products.map(product => {
    return (
        <ProductCard
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        description={product.description}
        />
    )
    })
}

    return (
        <div className="home">
            <p>hello world</p>
            {renderProducts()}
        </div>
    )
}

export default Home
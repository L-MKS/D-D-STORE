import React from 'react';
import { useSelector } from 'react-redux'
import Card from '../components/Card';
import "../components/Card.css"

const HomePage = () => {
    const products = useSelector(state => state.products)

    return(
        <div className="InvisibleBox">
            {products.map(item => {return(
                <Card key={item.id_product} product={item}>
                    {item.name_product}
                </Card>
            )})}
        </div>
    )
}

export default HomePage;
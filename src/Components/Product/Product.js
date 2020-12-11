import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../ContextProvider/StateProvider';
import './Product.css'

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <Link to={`item/${id}`} className="product">
            <>
                <div div className="product__info" >
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>🌟</p>
                            ))}
                    </div>
                </div >

                <img src={image} alt="" />

                <button onClick={addToBasket}>Add to Basket</button>
            </ >
        </Link >
    )
}

export default Product

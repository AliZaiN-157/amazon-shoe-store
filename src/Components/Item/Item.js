import React from 'react'
import { useParams } from 'react-router-dom';
import { useStateValue } from '../../ContextProvider/StateProvider';
import Header from '../Header/Header'
import Shoes from '../Shoe.json';
import './Item.css'

function Item() {
    const { title } = useParams();
    console.log(title);
    const shoe = Shoes[title.toLowerCase()];
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: shoe.id,
                title: shoe.name,
                image: shoe.img,
                price: shoe.price,
                rating: shoe.rating,
            }
        })
    }
    return (
        <>
            <Header />
            <div className="item">
                <div className="item__left">
                    <img
                        className="item__img"
                        src={shoe.img}
                        alt={shoe.name} />
                </div>
                <div className="item__right">
                    <div className="item__details">
                        <p className="item__title">
                            {shoe.name}
                        </p>
                        <p className="item__des">
                            {shoe.des}
                        </p>
                        <p className="item__rating">
                            {Array(shoe.rating)
                                .fill()
                                .map((_, i) => (
                                    <p>⭐</p>
                                ))}
                        </p>
                        <h2 className="item__price">
                            <small>$</small>
                            <strong>{shoe.price}</strong>
                        </h2>
                        <div className="item__Btn">
                            <button className="item__button"
                                onClick={addToBasket}>
                                Add to Basket
                        </button>
                            <button className="item__button">
                                Add to Wish List
                        </button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Item

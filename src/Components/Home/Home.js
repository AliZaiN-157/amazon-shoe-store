import React from 'react'
import Header from '../Header/Header'
import Product from '../Product/Product'
import './Home.css'
import Shoes from '../Shoe.json';

function Home() {
    return (
        <>
            <Header />
            <div className="home">

                <div className="home__container">
                    <img
                        className="home__image"
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                        alt=""
                    />

                    <div className="home__row">
                        <div className="home__card">
                            {Object.keys(Shoes).map((keyName) => {
                                const shoe = Shoes[keyName];
                                return (
                                    <Product
                                        id={shoe.id}
                                        title={shoe.name}
                                        price={shoe.price}
                                        rating={shoe.rating}
                                        image={shoe.img}
                                    />
                                )

                            })}
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

export default Home

import React from 'react';
import CardItems from './CardItems';
import './Card.css';

function Card() {
    return (
        <div className="cards">
            <h1>Check out these exciting places...</h1>
            <div className="card_container">
                <div className="card_wrapper">
                    <ul className="card_items">
                        <CardItems
                            src="../assets/images/img-9.jpg"
                            text="Explore the hidden waterfall deep within in the Amazon"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItems
                            src=""
                            text="Travel through the lovely island in a private cruiser"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                     <ul className="card_items">
                        <CardItems
                            src="../assets/images/img-3.jpg"
                            text="Set sail through vast unexplored waters"
                            label="Mystery"
                            path="/services"
                        />
                        <CardItems
                            src="../assets/images/img-4.jpg"
                            text="Experience football on the highest breath-taking mountains"
                            label="Adventure"
                            path="/products"
                        />
                        <CardItems
                            src="../assets/images/img-8.jpg"
                            text="Ride through the Sahara desert on a camel on an epic tour"
                            label="Hype"
                            path="/sign-up"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;

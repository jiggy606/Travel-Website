import React from 'react';
import { Link } from 'react-router-dom';

function CardItems(props) {
    return (
        <div>
            <li className="card_item">
                <Link className="card_item_link" to={props.path}>
                    <figure className="card_item_pic_wrap" data-category={props.label}>
                        <img src={props.src} alt="travel image" className="cards_item_img"></img>
                    </figure>
                    <div className="card_item_info">
                        <h5 className="card_item_text">{ props.text }</h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default CardItems

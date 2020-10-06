import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { useStateValue } from './StateProvider';

// import Subtotal from './Subtotal';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{}, dispatch] = useStateValue();
    let halfRating = (rating - Math.floor(rating)) * 10;
    
    console.log(id, image, title, price);

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="" />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(Math.floor(rating))
                            .fill()
                            .map((_, index) => (
                                <StarIcon key={index} />
                            ))
                    }
                    {
                        (halfRating > 0) ? <StarHalfIcon /> : <></>
                    }
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct

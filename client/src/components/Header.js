import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";
import { auth } from '../firebase.js';

function Header() {
    const [{ basket, user },] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
    }
}
    console.log(basket);
    return (
        <div className='header'>
            <Link to="/">
                <img className = "header_logo"
                src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
           
            <div className="header_search">
                <input className="header_searchInput" type="text" /> 
                <SearchIcon className="header_searchIcon" />
            </div>
{/* Error Sign In, Sign Out function not working */}
            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header_option'>
                        <span className='header_optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header_option">
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>Orders</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
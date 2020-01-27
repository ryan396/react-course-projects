import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioItemPage from './PortfolioItemPage';

const PortfolioPage = (props) => {
    return (
        <div> 
            <h1>My Work</h1>
            <p>Check out some of the things I've done!</p>
            <Link to="/portfolioitem/1">Item One</Link>
            <Link to="/portfolioitem/2">Item One</Link>
        </div>
    );
}

export default PortfolioPage;
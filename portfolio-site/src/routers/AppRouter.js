import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import PortfolioPage from '../components/PortfolioPage';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/contactpage" component={ContactPage} exact={true} />
                <Route path="/portfolio/" component={PortfolioPage} />
                <Route path="/portfolioitem/:id" component={PortfolioItemPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

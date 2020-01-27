import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        This page is for the item with the id of {props.match.params.id}
    </div>
);

export default PortfolioItemPage;
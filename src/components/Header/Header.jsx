import React from 'react';
import'./Header.css'
const Header = () => {
    return (
        <div className='head'>
            <h1>This is the main header</h1>
            <a href="/home">Home</a>
            <a href="/country">Country</a>
            <a href="/service">Service</a>
        </div>
    );
};

export default Header;
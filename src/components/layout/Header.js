import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>TodoList</h1>
                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            </header>
        </div>
    )
}

const headerStyle = {
    background: '#4184a4',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff'
}

export default Header;
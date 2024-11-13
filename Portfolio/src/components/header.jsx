import React from 'react';
import '../styles/header.css';
import Nav from './nav';

export default function Header() {
    return (
        <header>
            <h1>Maverick Snider</h1>
            <Nav />
        </header>
    );
}
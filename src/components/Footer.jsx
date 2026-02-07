import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-emerald)',
            color: 'var(--color-cream)',
            padding: 'var(--space-xl) var(--space-lg)',
            marginTop: 'auto'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-md)'
            }}>
                <h2 style={{ color: 'var(--color-gold)', letterSpacing: '2px' }}>NAWAL COLLECTION</h2>
                <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About Us</Link>
                </div>
                <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: 'var(--space-md)' }}>
                    © {new Date().getFullYear()} Nawal Collection. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

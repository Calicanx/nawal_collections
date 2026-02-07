import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import CartSidebar from './CartSidebar';
import FloatingWhatsApp from './FloatingWhatsApp';
import { CartProvider } from '../context/CartContext';
import { ProductProvider } from '../context/ProductContext';

const Layout = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <Navbar />
                    <CartSidebar />
                    <FloatingWhatsApp />
                    <main style={{ flex: 1 }}>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </CartProvider>
        </ProductProvider>
    );
};

export default Layout;

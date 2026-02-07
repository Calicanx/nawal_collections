import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    // Helper to check if image is a URL or CSS gradient
    const isUrl = product.image.startsWith('http');

    return (
        <div className="product-card" style={{
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
            }}
        >
            <div style={{
                height: '300px',
                background: isUrl ? `url(${product.image}) center/cover no-repeat` : product.image,
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Overlay effect could go here */}
            </div>
            <div style={{ padding: 'var(--space-sm)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                    margin: '0 0 var(--space-xs) 0',
                    fontSize: '1.1rem', // Slightly smaller for elegance
                    fontFamily: 'var(--font-heading)'
                }}>{product.name}</h3>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'var(--space-sm)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Price</span>
                        <span style={{
                            fontWeight: '800',
                            fontSize: '1.4rem',
                            color: 'var(--color-emerald)',
                            fontFamily: 'var(--font-body)',
                            lineHeight: 1
                        }}>${product.price}</span>
                    </div>
                    <button
                        onClick={() => addToCart(product)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 24px',
                            backgroundColor: 'var(--color-emerald)',
                            color: '#fff', // White text for better contrast
                            border: 'none',
                            borderRadius: '50px',
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(11, 70, 53, 0.3)', // Add shadow for "inviting" depth
                            transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 16px rgba(11, 70, 53, 0.4)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(11, 70, 53, 0.3)';
                        }}
                    >
                        Add <ShoppingBag size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

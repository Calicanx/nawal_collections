import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, MessageCircle } from 'lucide-react';

const CartSidebar = () => {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

    const handleCheckout = () => {
        if (cart.length === 0) return;

        let message = "Hello! I'd like to place an order from Nawal Collection:\n\n";
        cart.forEach(item => {
            message += `- ${item.name} (${item.category}) x${item.quantity}: $${item.price * item.quantity}\n`;
        });
        message += `\n*Total: $${cartTotal}*`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/254700000000?text=${encodedMessage}`, '_blank');
    };

    return (
        <>
            {/* Overlay */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 999,
                    opacity: isCartOpen ? 1 : 0,
                    pointerEvents: isCartOpen ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease'
                }}
                onClick={() => setIsCartOpen(false)}
            />

            {/* Sidebar */}
            <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: '400px',
                backgroundColor: '#fff',
                zIndex: 1000,
                transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.3s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-5px 0 30px rgba(0,0,0,0.1)'
            }}>
                <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', margin: 0 }}>Your Cart ({cart.length})</h2>
                    <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', cursor: 'pointer' }}>
                        <X size={24} />
                    </button>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
                    {cart.length === 0 ? (
                        <p style={{ textAlign: 'center', color: '#888', marginTop: '40px' }}>Your cart is empty.</p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {cart.map(item => (
                                <div key={item.id} style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{
                                        width: '70px',
                                        height: '70px',
                                        background: item.image?.includes('http') ? `url(${item.image}) center/cover` : item.image,
                                        borderRadius: '8px'
                                    }} />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                                            <button onClick={() => removeFromCart(item.id)} style={{ color: '#ff4444', background: 'none', padding: 0 }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <p style={{ margin: '0 0 10px 0', color: 'var(--color-emerald)' }}>${item.price}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            ><Minus size={14} /></button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            ><Plus size={14} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div style={{ padding: '20px', borderTop: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        <span>Total:</span>
                        <span>${cartTotal}</span>
                    </div>
                    <button
                        onClick={handleCheckout}
                        disabled={cart.length === 0}
                        style={{
                            width: '100%',
                            padding: '15px',
                            backgroundColor: cart.length === 0 ? '#ccc' : '#25D366',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: cart.length === 0 ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                    >
                        Checkout on WhatsApp <MessageCircle size={20} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartSidebar;

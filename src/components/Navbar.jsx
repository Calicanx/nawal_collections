import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="navbar" style={{
      padding: 'var(--space-md) var(--space-lg)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(249, 249, 245, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: '1px solid rgba(11, 70, 53, 0.1)'
    }}>
      <Link to="/" style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.8rem',
        fontWeight: '700',
        color: 'var(--color-emerald)',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}>
        Nawal Collection
      </Link>

      {/* Desktop Menu */}
      <div className="desktop-menu" style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center' }}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/shop" className="nav-link">Shop</Link>

        <button
          onClick={() => setIsCartOpen(true)}
          style={{
            position: 'relative',
            background: 'none',
            color: 'var(--color-emerald)',
            padding: '8px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ShoppingBag size={24} />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-5px',
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-emerald)',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>{cartCount}</span>
          )}
        </button>
      </div>

      <style>{`
        .nav-link {
          font-family: var(--font-body);
          font-size: 0.9rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: var(--color-gold);
          transition: width var(--transition-fast);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .shop-btn:hover {
          background-color: var(--color-emerald);
          color: var(--color-cream);
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

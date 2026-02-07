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
          className="cart-btn"
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

      {/* Mobile Controls */}
      <div className="mobile-controls" style={{ display: 'none', alignItems: 'center', gap: '15px' }}>
        <button
          onClick={() => setIsCartOpen(true)}
          style={{ background: 'none', color: 'var(--color-emerald)', position: 'relative', padding: '5px' }}
        >
          <ShoppingBag size={24} />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-5px',
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-emerald)',
              fontSize: '0.6rem',
              fontWeight: 'bold',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>{cartCount}</span>
          )}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', color: 'var(--color-emerald)', padding: '5px' }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(249, 249, 245, 0.9)', // Semi-transparent cream
        backdropFilter: 'blur(15px)', // Glassmorphism
        zIndex: 2000, // Above everything
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-lg)',
        transform: 'translateY(-100%)', // Slide from top instead of side
        opacity: 0,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: isOpen ? 'auto' : 'none'
      }}>
        {/* Close button inside mobile menu since it covers the navbar */}
        <button
          onClick={() => setIsOpen(false)}
          style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', color: 'var(--color-emerald)' }}
        >
          <X size={32} />
        </button>

        <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/shop" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Shop</Link>
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
        
        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          color: var(--color-emerald);
          text-transform: uppercase;
          letter-spacing: 4px;
          transition: color 0.3s ease;
        }
        .mobile-nav-link:hover {
          color: var(--color-gold);
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: var(--space-sm) var(--space-md) !important;
          }
          .desktop-menu { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

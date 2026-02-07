import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero" style={{
                height: '90vh',
                backgroundImage: 'url(https://images.unsplash.com/photo-1770371047764-392dea0f5283?q=80&w=624&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
            }}>
                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.4)', // Dark overlay for text readability
                    zIndex: 1
                }} />

                <div className="container" style={{
                    zIndex: 2,
                    textAlign: 'center',
                    maxWidth: '900px',
                    padding: '0 var(--space-md)'
                }}>
                    <h1 className="fade-in" style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(3rem, 8vw, 5.5rem)', // Responsive font size
                        marginBottom: 'var(--space-sm)',
                        lineHeight: 1.1,
                        color: '#f9f9f5', // Creamy white
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        animationDelay: '0.2s'
                    }}>
                        Elegance Redefined.
                    </h1>
                    <p className="fade-in" style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        marginBottom: 'var(--space-lg)',
                        maxWidth: '700px',
                        margin: '0 auto var(--space-lg)',
                        opacity: 0, // Handled by animation
                        animationDelay: '0.4s', // Staggered delay
                        animationFillMode: 'forwards',
                        fontWeight: '300',
                        letterSpacing: '0.5px'
                    }}>
                        Discover the finest collection of Deras, Jewellery, and Hijabs.
                        Curated for the modern woman who appreciates tradition and luxury.
                    </p>
                    <Link to="/shop" className="fade-in" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--space-xs)',
                        padding: '1.2rem 3rem',
                        backgroundColor: '#fff',
                        color: 'var(--color-emerald)',
                        fontWeight: '600',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.1rem',
                        borderRadius: '50px', // Fully rounded
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        transition: 'all 0.3s ease',
                        border: '1px solid #fff',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        opacity: 0,
                        animationDelay: '0.6s',
                        animationFillMode: 'forwards'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#fff';
                            e.currentTarget.style.color = 'var(--color-emerald)';
                        }}
                    >
                        Shop Now <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Categories Preview */}
            <section style={{ padding: 'var(--space-xl) 0', backgroundColor: 'var(--color-cream)' }}>
                <div className="container">
                    <h2 className="text-center fade-in" style={{
                        marginBottom: 'var(--space-lg)',
                        fontSize: '3rem',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-emerald)'
                    }}>Our Collections</h2>

                    <div className="grid" style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: 'var(--space-md)'
                    }}>
                        {['Dera', 'Jewellery', 'Hijabs'].map((cat, index) => (
                            <Link
                                to={`/shop?category=${cat}`}
                                key={cat}
                                className="collection-card fade-in"
                                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                            >
                                <div className="collection-img" style={{
                                    backgroundImage: cat === 'Dera' ? 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-M1-f4GzW6BPoda4waF8_-5Hmiasz0DoSw&s)' :
                                        cat === 'Jewellery' ? 'url(https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop)' :
                                            'url(https://images.unsplash.com/photo-1767647986631-efdd7b1e6e18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlqYWIlMjBqZXdlbGxlcnklMjBmYXNoaW9ufGVufDB8fDB8fHww)'
                                }} />
                                <div className="collection-overlay" />
                                <div className="collection-content">
                                    <h3>{cat}</h3>
                                    <span className="collection-btn">
                                        Explore <ArrowRight size={18} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <style>{`
                    .collection-card {
                        position: relative;
                        height: 500px;
                        display: block;
                        overflow: hidden;
                        border-radius: 12px;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                    }
                    .collection-img {
                        position: absolute;
                        inset: 0;
                        background-size: cover;
                        background-position: center;
                        transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    }
                    .collection-overlay {
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(to top, rgba(11, 70, 53, 0.8) 0%, rgba(0,0,0,0) 60%);
                        transition: opacity 0.3s ease;
                    }
                    .collection-content {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        padding: 2rem;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        z-index: 2;
                    }
                    .collection-content h3 {
                        color: #fff;
                        font-size: 2.5rem;
                        margin-bottom: 0.5rem;
                        transform: translateY(20px);
                        transition: transform 0.3s ease;
                    }
                    .collection-btn {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        color: var(--color-gold);
                        font-family: var(--font-body);
                        font-weight: 600;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        font-size: 0.9rem;
                        opacity: 0;
                        transform: translateY(20px);
                        transition: all 0.3s ease 0.1s;
                    }
                    /* Hover Effects */
                    .collection-card:hover .collection-img {
                        transform: scale(1.1);
                    }
                    .collection-card:hover .collection-content h3 {
                        transform: translateY(0);
                    }
                    .collection-card:hover .collection-btn {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    @media (max-width: 768px) {
                        .hero { height: 80vh !important; }
                        .hero h1 { font-size: 3.5rem !important; }
                        .hero p { font-size: 1rem !important; margin-bottom: 2rem !important; }
                        .collection-card { height: 350px !important; }
                        .collection-content h3 { font-size: 1.8rem !important; transform: translateY(0); }
                        .collection-btn { opacity: 1; transform: translateY(0); font-size: 0.8rem; }
                        section { padding: var(--space-lg) 0 !important; }
                    }
                `}</style>
            </section>
        </div>
    );
};

export default Home;

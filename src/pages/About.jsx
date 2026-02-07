import React from 'react';

const About = () => {
    return (
        <div className="about-page container" style={{ padding: 'var(--space-xl) var(--space-sm)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--space-md)', color: 'var(--color-emerald)' }}>Our Story</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: 'var(--space-md)', opacity: 0.8 }}>
                    Nawal Collection was born from a passion for traditional elegance and modern sophistication.
                    We believe that every piece of clothing tells a story, and our curated selection of Deras,
                    Jewellery, and Hijabs is designed to help you tell yours.
                </p>
                <p style={{ fontSize: '1.2rem', marginBottom: 'var(--space-lg)', opacity: 0.8 }}>
                    Whether you're looking for the perfect outfit for a special occasion or everyday luxury,
                    Nawal Collection offers unique, high-quality pieces that celebrate heritage and style.
                </p>

                <div style={{
                    marginTop: 'var(--space-xl)',
                    padding: 'var(--space-lg)',
                    backgroundColor: 'var(--color-emerald)',
                    color: 'var(--color-gold)',
                    borderRadius: '8px'
                }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>"Beauty in Every Thread"</h2>
                </div>
            </div>
        </div>
    );
};

export default About;

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';

const Shop = () => {
    const { products } = useProducts();
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category') || 'All';
    const [activeCategory, setActiveCategory] = useState(categoryParam);

    useEffect(() => {
        setActiveCategory(categoryParam);
    }, [categoryParam]);

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setSearchParams(cat === 'All' ? {} : { category: cat });
    };

    const handleWhatsAppBuy = (productName) => {
        const text = encodeURIComponent(`Hello! I am interested in purchasing the "${productName}" from Nawal Collection.`);
        window.open(`https://wa.me/254700000000?text=${text}`, '_blank');
    };

    return (
        <div className="shop-page container" style={{ padding: 'var(--space-md) var(--space-sm) var(--space-xl)' }}>
            <style>{`
                @media (max-width: 768px) {
                    .shop-page { padding-top: var(--space-sm) !important; }
                    .filters { margin-bottom: var(--space-md) !important; gap: 8px !important; }
                    .filters button { padding: 8px 16px !important; font-size: 0.85rem !important; }
                }
            `}</style>
            {/* Category Filter */}
            <div className="filters" style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-sm)',
                marginBottom: 'var(--space-lg)',
                marginTop: '0',
                flexWrap: 'wrap'
            }}>
                {['All', 'Dera', 'Jewellery', 'Hijabs'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        style={{
                            padding: '10px 24px',
                            borderRadius: '50px', // Fully rounded
                            border: activeCategory === cat ? 'none' : '1px solid #ddd',
                            backgroundColor: activeCategory === cat ? 'var(--color-emerald)' : 'transparent',
                            color: activeCategory === cat ? '#fff' : '#666',
                            fontFamily: 'var(--font-body)',
                            fontWeight: '500',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: activeCategory === cat ? '0 4px 10px rgba(11, 70, 53, 0.2)' : 'none'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid" style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 'var(--space-md)'
            }}>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;

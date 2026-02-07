import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

const initialProducts = [
    { id: 1, name: 'Royal Emerald Dera', category: 'Dera', price: 120, image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop' },
    { id: 2, name: 'Golden Sun Dera', category: 'Dera', price: 110, image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop' },
    { id: 3, name: 'Obsidian Necklace', category: 'Jewellery', price: 250, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop' },
    { id: 4, name: 'Pearl Drop Earrings', category: 'Jewellery', price: 85, image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=800&auto=format&fit=crop' },
    { id: 5, name: 'Silk Chiffon Hijab', category: 'Hijabs', price: 35, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop' },
    { id: 6, name: 'Velvet Midnight Hijab', category: 'Hijabs', price: 45, image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=800&auto=format&fit=crop' },
    { id: 7, name: 'Ruby Ring', category: 'Jewellery', price: 190, image: 'https://images.unsplash.com/photo-1605100804763-ebea23b827c1?q=80&w=800&auto=format&fit=crop' },
    { id: 8, name: 'Sapphire Pendant', category: 'Jewellery', price: 210, image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop' },
    { id: 9, name: 'Modest Rose Dress', category: 'Dera', price: 135, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop' },
];

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem('nawal-products');
        return saved ? JSON.parse(saved) : initialProducts;
    });

    useEffect(() => {
        localStorage.setItem('nawal-products', JSON.stringify(products));
    }, [products]);

    const addProduct = (product) => {
        const newProduct = { ...product, id: Date.now(), price: Number(product.price) };
        setProducts(prev => [...prev, newProduct]);
    };

    const deleteProduct = (id) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

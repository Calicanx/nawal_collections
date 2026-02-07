import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { Trash, Plus, MessageSquare } from 'lucide-react';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { products, addProduct, deleteProduct } = useProducts();
    const [newProduct, setNewProduct] = useState({ name: '', category: 'Dera', price: '', image: '' });

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Invalid credentials');
        }
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (!newProduct.name || !newProduct.price || !newProduct.image) return;
        addProduct(newProduct);
        setNewProduct({ name: '', category: 'Dera', price: '', image: '' });
    };

    if (!isAuthenticated) {
        return (
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <form onSubmit={handleLogin} style={{
                    padding: '2rem',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    width: '100%',
                    maxWidth: '400px',
                    textAlign: 'center'
                }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Admin Login</h2>
                    {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginBottom: '1rem',
                            border: '1px solid #ddd',
                            borderRadius: '8px'
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginBottom: '1.5rem',
                            border: '1px solid #ddd',
                            borderRadius: '8px'
                        }}
                    />
                    <button type="submit" style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: 'var(--color-emerald)',
                        color: 'var(--color-gold)',
                        border: 'none',
                        borderRadius: '50px',
                        fontWeight: '600',
                        fontSize: '1rem'
                    }}>
                        Login
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="admin-page container" style={{ padding: 'var(--space-md) var(--space-sm) var(--space-xl)' }}>
            <style>{`
                @media (max-width: 768px) {
                    .admin-page { padding: var(--space-sm) !important; }
                    .admin-page h1 { font-size: 2rem !important; margin-bottom: var(--space-sm) !important; }
                    .admin-page h3 { font-size: 1.2rem !important; }
                    .admin-page form { grid-template-columns: 1fr !important; }
                }
            `}</style>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>Admin Dashboard</h1>

            {/* Add Product Form */}
            <div style={{
                backgroundColor: '#fff',
                padding: 'var(--space-md)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                marginBottom: 'var(--space-xl)'
            }}>
                <h3 style={{ marginBottom: 'var(--space-sm)' }}>Add New Product</h3>
                <form onSubmit={handleAddProduct} style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
                    />
                    <select
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                        style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
                    >
                        <option value="Dera">Dera</option>
                        <option value="Jewellery">Jewellery</option>
                        <option value="Hijabs">Hijabs</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Price ($)"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
                    />
                    <input
                        type="text"
                        placeholder="Image URL (Unsplash preferred)"
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
                    />
                    <button type="submit" style={{
                        padding: '10px',
                        backgroundColor: 'var(--color-emerald)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        Add Product <Plus size={16} />
                    </button>
                </form>
            </div>

            {/* Product List */}
            <h3 style={{ marginBottom: 'var(--space-sm)' }}>Manage Products ({products.length})</h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--space-md)' }}>
                {products.map(product => (
                    <div key={product.id} style={{
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                        position: 'relative'
                    }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '0.8rem', color: '#666' }}>{product.category}</span>
                                <span style={{ fontWeight: 'bold', color: 'var(--color-emerald)' }}>${product.price}</span>
                            </div>
                            <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>{product.name}</h4>
                            <button
                                onClick={() => deleteProduct(product.id)}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    backgroundColor: '#fee2e2',
                                    color: '#ef4444',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    fontWeight: '600'
                                }}
                            >
                                Delete <Trash size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;

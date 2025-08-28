import React, { useState, useEffect } from 'react';
import styles from './PricelistPage.module.css';
import { useWindowSize } from '../hooks/useWindowSize';

export function PricelistPage() {
    const [items, setItems] = useState([]);
    const { width } = useWindowSize();

    useEffect(() => {
        fetch('/pricelist')
            .then(res => res.json())
            .then(setItems)
            .catch(err => console.error("Failed to fetch pricelist:", err));
    }, []);

    const handleInputChange = (e, id) => {
        const { name, value } = e.target;
        const newItems = items.map(item =>
            item.id === id ? { ...item, [name]: value } : item
        );
        setItems(newItems);
    };

    const handleSave = (id) => {
        const itemToSave = items.find(item => item.id === id);
        fetch(`/pricelist/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemToSave),
        })
            .then(res => res.json())
            .then(updatedItem => {
                console.log('Saved:', updatedItem);
                // Optionally show a success message
            })
            .catch(err => console.error("Failed to save item:", err));
    };

    const isDesktop = width >= 1024;
    const isTablet = width >= 768;

    return (
        <div className={styles.pricelistContainer}>
            <header className={styles.header}>
                {/* Hamburger Menu Icon */}
                <button>☰</button>
                <span>English</span>
                <img src="https://storage.123fakturere.no/public/flags/GB.png" alt="flag" style={{ height: '24px', borderRadius: '50%' }} />
            </header>

            <div className={styles.controls}>
                {/* Add controls like search and buttons here */}
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.pricelistTable}>
                    <thead>
                        <tr>
                            {isTablet && <th>Article No.</th>}
                            <th>Product/Service</th>
                            <th>Price</th>
                            {isTablet && <th>In Stock</th>}
                            {isDesktop && <th>Unit</th>}
                            {isDesktop && <th>Description</th>}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                {isTablet && <td><input name="articleNo" value={item.articleNo || ''} onChange={(e) => handleInputChange(e, item.id)} /></td>}
                                <td><input name="productService" value={item.productService} onChange={(e) => handleInputChange(e, item.id)} /></td>
                                <td><input name="price" value={item.price || ''} onChange={(e) => handleInputChange(e, item.id)} type="number" /></td>
                                {isTablet && <td><input name="inStock" value={item.inStock || ''} onChange={(e) => handleInputChange(e, item.id)} type="number" /></td>}
                                {isDesktop && <td><input name="unit" value={item.unit || ''} onChange={(e) => handleInputChange(e, item.id)} /></td>}
                                {isDesktop && <td><input name="description" value={item.description || ''} onChange={(e) => handleInputChange(e, item.id)} /></td>}
                                <td><button onClick={() => handleSave(item.id)}>Save</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
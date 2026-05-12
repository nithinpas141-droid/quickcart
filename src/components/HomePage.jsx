import React from 'react';
import ProductList from './ProductList';
import { useCart } from '../context/CartContext';

function HomePage({ products, searchTerm }) {
  const { addToCart } = useCart();
  
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h2 className="section-title">Our Products</h2>
      
      {searchTerm && (
        <p className="search-results">
          Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      )}
      
      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <p>😕 No products found</p>
          {searchTerm && (
            <p className="no-results-hint">Try searching with different terms</p>
          )}
        </div>
      ) : (
        <ProductList 
          products={filteredProducts}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}

export default HomePage;

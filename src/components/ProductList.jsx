import products from '../data/products.js';
import ProductCard from './ProductCard.jsx';
import '../styles/ProductList.css';

function ProductList({ products, onAddToCart }) {
  return (
    <section className="product-list">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;

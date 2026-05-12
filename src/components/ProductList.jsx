import ProductCard from './ProductCard.jsx';
import products from '../data/products.js';
import '../styles/ProductList.css';

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

export default ProductList;

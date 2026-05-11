import products from '../data/products.js';
import ProductCard from './ProductCard.jsx';
import '../styles/ProductList.css';

function ProductList() {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;

import '../styles/ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card__content">
        <p className="product-card__category">{product.category}</p>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">${product.price}</span>
        </div>
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;

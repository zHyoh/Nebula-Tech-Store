export default function ProductCard({ name, price, desc, img, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={img} alt={name} />
      </div>
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">{price}</span>
        </div>
        <p className="product-description">{desc}</p>
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          Añadir
        </button>
      </div>
    </article>
  );
}
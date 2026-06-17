export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="header bg-nebula">
      <div className="container d-flex j-content-s-between a-items-center nav">
        <h1 className="logo no-margin">Nebula Store</h1>
        <nav>
          <ul className="list d-flex g-8 no-margin">
            <li><a href="#" className="nav-link active">Inicio</a></li>
            <li><a href="#" className="nav-link">Categorías</a></li>
            <li><a href="#" className="nav-link">Zona Gamer</a></li>
            <li><a href="#" className="nav-link">Contacto</a></li>
          </ul>
        </nav>
        <div className="d-flex g-4 a-items-center">
          {/* Añadimos el onClick al contenedor del carrito */}
          <button onClick={onCartClick} className="icon-link" style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer' }}>
            🛒 
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
          <a href="#" className="icon-link">👤</a>
        </div>
      </div>
    </header>
  );
}
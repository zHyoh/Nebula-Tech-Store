export default function Header({ cartCount }) {
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
          <a href="#" className="icon-link" style={{ position: 'relative' }}>
            🛒 
            {cartCount > 0 && (
              <span className="cart-badge" style={{
                position: 'absolute',
                top: '-8px',
                right: '-10px',
                background: '#ff4757',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '11px',
                fontWeight: 'bold'
              }}>
                {cartCount}
              </span>
            )}
          </a>
          <a href="#" className="icon-link">👤</a>
        </div>
      </div>
    </header>
  );
}
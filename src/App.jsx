import { useState } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Categories from './components/categories';
import GamerZone from './components/gamerzone';
import ProductCard from './components/productcard';

function App() {
  // Estado para la pestaña de filtrado activa
  const [activeTab, setActiveTab] = useState('Todo');
  
  // Estado para el contador del carrito
  const [cartCount, setCartCount] = useState(0);

  // Simulación de base de datos con categorías asignadas
  const products = [
    { id: 1, name: "Vortex K9 Mechanical", price: 129.99, desc: "Interruptores silenciosos, chasis de aluminio.", tag: "Populares" },
    { id: 2, name: "Nebula Tab Ultra", price: 849.00, desc: "Pantalla OLED 144Hz, procesador de última generación.", tag: "Nuevos" },
    { id: 3, name: "Titan X Studio", price: 199.50, desc: "Cancelación de ruido activa, controladores de 50mm.", tag: "Populares" }
  ];

  // Función para incrementar el carrito desde el hijo
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  // Filtrado lógico en base al estado de la pestaña
  const filteredProducts = activeTab === 'Todo' 
    ? products 
    : products.filter(p => p.tag === activeTab);

  return (
    <>
      {/* Pasamos el contador al Header para que se pinte junto al ícono del carrito */}
      <Header cartCount={cartCount} />
      <main>
        <Hero />
        <Categories />
        <GamerZone />

        <section className="selection-section">
          <div className="container">
            <h2 className="section-title">Nuestra Selección</h2>
            
            {/* Pestañas interactivas */}
            <div className="filter-tabs">
              {['Todo', 'Populares', 'Nuevos'].map(tab => (
                <button 
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Grid de productos renderizado dinámicamente */}
            <div className="product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id}
                    name={product.name}
                    price={`$${product.price}`}
                    desc={product.desc}
                    onAddToCart={handleAddToCart}
                  />
                ))
              ) : (
                <p>No hay productos en esta categoría por ahora.</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
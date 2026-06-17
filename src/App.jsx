import { useState } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Categories from './components/categories';
import GamerZone from './components/gamerzone';
import ProductCard from './components/productcard';
import CartDrawer from './components/CartDrawer'; // El nuevo componente que crearemos

function App() {
  const [activeTab, setActiveTab] = useState('Todo');
  
  // Estado para la lista de productos en el carrito
  const [cart, setCart] = useState([]);
  // Estado para abrir/cerrar el carrito lateral
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    { id: 1, name: "Vortex K9 Mechanical", price: 129.99, desc: "Interruptores silenciosos, chasis de aluminio.", tag: "Populares", img: "" },
    { id: 2, name: "Nebula Tab Ultra", price: 849.00, desc: "Pantalla OLED 144Hz, procesador de última generación.", tag: "Nuevos", img: "" },
    { id: 3, name: "Titan X Studio", price: 199.50, desc: "Cancelación de ruido activa, controladores de 50mm.", tag: "Populares", img: "" }
  ];

  // Función interactiva para añadir objetos completos al carrito
  const handleAddToCart = (product) => {
    setCart(prevCart => {
      // ¿El producto ya existe en el carrito?
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        // Si ya existe, le sumamos 1 a la cantidad
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Si es nuevo, lo agregamos con cantidad inicial de 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Función para remover o restar cantidad desde el carrito lateral
  const handleRemoveFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Calcula el total de ítems sumando las cantidades individuales
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const filteredProducts = activeTab === 'Todo' 
    ? products 
    : products.filter(p => p.tag === activeTab);

  return (
    <>
      {/* Pasamos la función para abrir el carrito cuando se haga clic en el icono */}
      <Header cartCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <Categories />
        <GamerZone />

        <section className="selection-section">
          <div className="container">
            <h2 className="section-title">Nuestra Selección</h2>
            
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

            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id}
                  name={product.name}
                  price={`$${product.price}`}
                  desc={product.desc}
                  /* Ahora le pasamos el objeto entero del producto al hacer clic */
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Componente flotante del carrito */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
      />
    </>
  );
}

export default App;
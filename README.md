# Nebula Tech Store 🌌

Nebula Tech Store es una aplicación web moderna de comercio electrónico enfocada en hardware y periféricos premium para gaming y desarrollo. El proyecto ha sido completamente migrado de una estructura HTML/CSS estática a una **arquitectura de componentes modulares altamente interactiva utilizando React 19 y Vite**.

## 🚀 Características Implementadas

* **Arquitectura Modular:** Separación limpia de la interfaz en componentes independientes y reutilizables (`Header`, `Hero`, `Categories`, `GamerZone`, `ProductCard`, `CartDrawer`).
* **Carrito Lateral Interactivo (Cart Drawer):** Panel flotante cyberpunk que permite visualizar productos añadidos, calcular subtotales dinámicamente y gestionar las cantidades en tiempo real sin recargar la página.
* **Filtros Dinámicos:** Sistema de pestañas reactivas para categorizar y segmentar los productos en catálogo ("Todo", "Populares", "Nuevos").
* **Navegación Fluida:** Eventos de scroll optimizados para dirigir al usuario de forma elegante desde las llamadas a la acción principales hasta las secciones de productos.
* **Estética Premium:** Paleta de colores optimizada para entornos oscuros, tipografías estructuradas y layouts responsivos basados en Flexbox.

## 🛠️ Tecnologías Utilizadas

* **React 19** - Librería para la construcción de interfaces declarativas.
* **Vite 6** - Entorno de desarrollo rápido y empaquetador de producción.
* **JavaScript (ES6+)** - Lógica reactiva y manejo de estados dinámicos.
* **CSS3 Custom Properties** - Estilos optimizados y variables de diseño.

## 📁 Estructura del Proyecto

```text
NEBULA-TECH-STORE/
├── public/
│   └── images/          # Assets estáticos y fotos de productos
├── src/
│   ├── components/      # Componentes modulares de la interfaz
│   │   ├── cartdrawer.jsx
│   │   ├── categories.jsx
│   │   ├── gamerzone.jsx
│   │   ├── header.jsx
│   │   ├── hero.jsx
│   │   └── productcard.jsx
│   ├── App.css
│   ├── App.jsx          # Lógica centralizada y estado global del carrito
│   ├── index.css        # Estilos generales y clases de utilidad
│   └── main.jsx         # Punto de entrada de la aplicación
├── index.html
├── package.json
└── vite.config.js
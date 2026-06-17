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

💻 Instalación y Desarrollo Local (Guía de Pasos npm)
Sigue este flujo de comandos en tu terminal para clonar, instalar y ejecutar el entorno de desarrollo local desde cero:

1. Clonar el repositorio
Descarga una copia local del proyecto directamente desde GitHub:

Bash
git clone [https://github.com/zHyoh/Nebula-Tech-Store.git](https://github.com/zHyoh/Nebula-Tech-Store.git)
2. Acceder al directorio
Entra a la carpeta raíz que se acaba de crear:

Bash
cd Nebula-Tech-Store
3. Instalar dependencias del proyecto (npm install)
Descarga todos los módulos y paquetes necesarios de React y Vite especificados en el package.json:

Bash
npm install
(Este comando generará automáticamente la carpeta node_modules y el archivo package-lock.json).

4. Levantar el servidor local (npm run dev)
Inicia el entorno de desarrollo automatizado de Vite para previsualizar la aplicación:

Bash
npm run dev
5. Abrir en el navegador
Una vez que la terminal indique que el entorno está listo, haz Ctrl + Clic o abre la siguiente dirección en tu navegador:

Plaintext
http://localhost:5173/
🛠️ Comandos de Mantenimiento y Producción
🔄 Forzar reinicio limpiando caché de Vite
Si realizas cambios en los nombres de las imágenes dentro de public/images/ o modificas importaciones de componentes y el navegador se queda congelado mostrando datos antiguos, detén la terminal con Ctrl + C y fuerza una recarga limpia ejecutando:

Bash
npm run dev -- --force
📦 Construcción para Producción (npm run build)
Para compilar y empaquetar toda la aplicación optimizada para producción (listo para desplegar en plataformas de hosting como Vercel o Netlify), ejecuta:

Bash
npm run build
Este comando procesará los archivos de desarrollo y generará una carpeta llamada dist/ en la raíz del proyecto, la cual contendrá exclusivamente el HTML, CSS y JavaScript minificados de alta velocidad.

🚀 Previsualizar el empaquetado final (npm run preview)
Si quieres probar de manera local cómo se comportará y renderizará la carpeta de producción dist/ antes de subirla a internet, utiliza:

Bash
npm run preview
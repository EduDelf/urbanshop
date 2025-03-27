# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 🛒 Ecommerce Store

Este es un proyecto de ecommerce con una arquitectura basada en **Node.js, Express, PostgreSQL** para el backend, y **React.js con Redux** para el frontend web. Se planea una futura implementación para **React Native** en dispositivos móviles.

---

## 📂 Estructura del Proyecto

📂 ecommerce-store/
├── 📂 backend/                 # API REST con Node.js + Express + PostgreSQL (aún no creamos)
│   ├── 📂 controllers/         # Lógica de negocio
│   ├── 📂 models/              # Esquemas de la base de datos
│   ├── 📂 routes/              # Rutas para la API
│   ├── server.js              # Punto de entrada del backend
│   ├── config.js              # Configuraciones globales
│   ├── package.json           # Dependencias del backend
│   ├── .env                   # Variables de entorno
│
├── 📂 frontend-web/            # Web con React.js + Redux + Bootstrap
│   ├── 📂 src/
│   │   ├── 📂 components/      # Componentes reutilizables (Navbar, Footer, etc.)
│   │   ├── 📂 pages/           # Páginas (Home, Product, Cart, etc.)
│   │   ├── 📂 redux/           # Redux (slices y store)
│   │   │   ├── store.js        # Configuración de Redux Store
│   │   │   ├── slices/         # Reducers individuales (cartSlice.js)
│   │   ├── App.jsx             # Componente principal
│   │   ├── main.jsx            # Renderizado principal
│   │   ├── index.css           # Estilos globales
│   ├── vite.config.js          # Configuración de Vite
│   ├── package.json            # Dependencias del frontend-web
│
├── 📂 frontend-mobile/         # App móvil con React Native (aún no creamos)
│   ├── 📂 src/
│   │   ├── 📂 components/      # Botones, Modals, etc.
│   │   ├── 📂 screens/         # Pantallas (Home, Product, Cart, etc.)
│   │   ├── 📂 redux/           # Estado global para la app móvil
│   │   ├── App.js              # Punto de entrada de la app móvil
│   ├── package.json    

---

## 🚀 Tecnologías Utilizadas

### Backend:
- **Node.js** + **Express**: API REST
- **PostgreSQL**: Base de datos relacional
- **Sequelize** (opcional): ORM para base de datos
- **JWT**: Autenticación de usuarios
- **Bcrypt**: Hashing de contraseñas

### Frontend Web:
- **React.js** + **Vite**: Desarrollo rápido y optimizado
- **Redux Toolkit**: Manejo del estado global
- **React Router**: Navegación entre páginas
- **Bootstrap**: Estilos y UI

### Frontend Mobile:
- **React Native**: Desarrollo móvil híbrido (aún no implementado)
- **Redux Toolkit**: Estado global en la app

---

## 📌 Instalación y Configuración

### 🔹 Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/ecommerce-store.git
cd ecommerce-store

🔹 Configuración del Backend:

cd backend
npm install
cp .env.example .env  # Configurar variables de entorno
npm start  # Iniciar el servidor en http://localhost:5000

🔹 Configuración del Frontend Web:

cd frontend-web
npm install
npm run dev  # Iniciar el frontend en http://localhost:5173

🔹 Configuración del Frontend Mobile (React Native):

(Aún no implementado)

🤝 Contribución

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes enviar un pull request o sugerencias en issues.
📄 Licencia

Este proyecto está bajo la licencia MIT.
# 🎧 React Music Player

Aplicación web de música responsiva desarrollada con **React** y **Vite**, creada como parte del Diplomado Full Stack del Instituto Profesional San Sebastián (IPP). Esta aplicación permite buscar canciones, reproducir previews, gestionar favoritos y navegar entre tracks con una barra de reproducción personalizada.

---

## 📌 Características

- **Búsqueda de canciones**: Utiliza la API de Deezer para buscar canciones por nombre, artista o álbum.
- **Reproducción de previews**: Escucha fragmentos de 30 segundos de las canciones seleccionadas.
- **Controles de reproducción**: Play, pause, siguiente y anterior.
- **Barra de progreso**: Visualiza el tiempo actual y la duración total de la canción.
- **Favoritos**: Añade canciones a tus favoritos y visualízalos en una sección dedicada.
- **Interfaz responsiva**: Diseño adaptativo para móviles y escritorio.
- **Autoplay**: Reproducción automática del siguiente track al finalizar el actual, respetando restricciones del navegador.

---

## 🛠 Tecnologías

- **Frontend**: React, Vite
- **Estado global**: Context API
- **Estilos**: CSS / Tailwind (según implementación)
- **Iconos**: React Icons (`react-icons/fa`)
- **API externa**: Deezer (a través de proxy para evitar CORS)

---

## 📁 Estructura del Proyecto

src/
├─ api/ # Funciones para interactuar con la API de Deezer
├─ components/ # Componentes reutilizables
│ ├─ TrackCard.jsx # Tarjeta de canción
│ ├─ TrackDetail.jsx # Detalles de la canción
│ └─ SearchBar.jsx # Barra de búsqueda
├─ context/ # Contexto global para favoritos y reproducción
│ └─ MusicContext.jsx
├─ pages/ # Páginas de la aplicación
│ ├─ Home.jsx # Página principal
│ └─ Favorites.jsx # Página de favoritos
├─ App.jsx # Componente principal
└─ main.jsx # Punto de entrada


---

## 🚀 Instalación y Uso

1. Clona el repositorio:

```bash
git clone https://github.com/koke2911/react-diplomado.git
cd react-diplomado

    Instala dependencias:

npm install

    Inicia el servidor de desarrollo:

npm run dev
# o
yarn dev

    Abre http://localhost:5173 en tu navegador.

🌐 Despliegue

La aplicación está desplegada en Vercel: react-diplomado.vercel.app
📜 Notas de Desarrollo

    Autoplay: La reproducción automática solo se activa después de la primera interacción del usuario.

    CORS: Se utiliza un proxy para consumir la API de Deezer y evitar problemas de CORS.

    Favoritos: Los favoritos se almacenan en localStorage, permitiendo persistencia entre sesiones.

🤝 Contribución

    Haz un fork del repositorio.

    Crea una rama para tu feature:

git checkout -b feature/nueva-funcionalidad

    Realiza tus cambios y haz commit:

git commit -m "Añade nueva funcionalidad"

    Empuja tus cambios:

git push origin feature/nueva-funcionalidad

    Crea un Pull Request describiendo tus cambios.

📄 Licencia

Este proyecto es de código abierto y se distribuye bajo la licencia MIT.
📞 Contacto

    Autor: @koke2911

    Instituto Profesional San Sebastián : https://ipss.cl/


# React JWT Authentication Template

Este repositorio es una plantilla base para implementar un sistema de autenticación en el frontend utilizando **React** y **JWT**. Está diseñado para facilitar la integración con un backend que implemente JWT como mecanismo de autenticación.

## Características

- Construido con **React** y configurado con **Vite** para un desarrollo rápido.
- Uso de **Axios** para realizar solicitudes HTTP al backend.
- Contexto global de autenticación utilizando **Context API** de React.
- Soporte para login, logout y validación de sesión de usuario.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados:

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/).

## Configuración del proyecto

Sigue los pasos a continuación para clonar el repositorio y configurarlo:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ericheinitz/react-jwt.git
   cd react-jwt
   ```

2. **Instalar las dependencias**
   Ejecuta el siguiente comando para instalar las dependencias necesarias:
   ```bash
   npm install
   # o si prefieres yarn:
   yarn install
   ```

3. **Configurar el entorno**
   Este proyecto utiliza **Axios** para realizar solicitudes HTTP. Asegúrate de configurar la base URL de tu API en el archivo `src/api/axios.js`. Ejemplo:
   ```javascript
   import axios from 'axios';

   export default axios.create({
       baseURL: 'http://localhost:3000/api', // Cambia esto según tu backend
   });
   ```

4. **Ejecutar la aplicación**
   Inicia el servidor de desarrollo con:
   ```bash
   npm run dev
   # o con yarn:
   yarn dev
   ```

   La aplicación estará disponible en `http://localhost:5173` (puerto predeterminado de Vite).

## Librerías utilizadas

Este proyecto utiliza las siguientes librerías y herramientas:

- **[React](https://reactjs.org/)**: Biblioteca para construir interfaces de usuario.
- **[Vite](https://vitejs.dev/)**: Herramienta para un entorno de desarrollo rápido.
- **[React Router](https://reactrouter.com/)**: Manejo de rutas en la aplicación.
- **[Axios](https://axios-http.com/)**: Realización de solicitudes HTTP.
- **[js-cookie](https://github.com/js-cookie/js-cookie)**: Manejo de cookies para almacenar datos de sesión.
- **[TailwindCSS](https://tailwindcss.com/)**: Framework de diseño para estilos.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y genera un commit (`git commit -m "Agrega nueva funcionalidad"`).
4. Envía tus cambios al repositorio remoto (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request en GitHub.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

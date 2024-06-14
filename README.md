
# SistaleAPI

SistaleAPI es el backend de la plataforma Sistale, desarrollado con Express y MongoDB, que proporciona servicios de API RESTful para la gestión de usuarios, artículos y comentarios.

## Estructura del Proyecto

```
sistaleApi
├─ .babelrc
├─ SistaleAPI_postman_collection.json
├─ jest.config.js
├─ package-lock.json
├─ package.json
├─ sonar-project.properties
├─ src
│  ├─ app.js
│  ├─ controllers
│  │  ├─ articulo-controlador.js
│  │  ├─ auth-controlador.js
│  │  └─ comentario-controlador.js
│  ├─ index.js
│  ├─ loaders
│  │  ├─ db-loader.js
│  │  ├─ express-loader.js
│  │  └─ index.js
│  ├─ middlewares
│  │  ├─ articulo-comentario-middleware.js
│  │  ├─ auth-middleware.js
│  │  ├─ checkAdminPermissions-middleware.js
│  │  ├─ checkMemberPermissions-middleware.js
│  │  └─ error-middleware.js
│  ├─ models
│  │  ├─ articulo-modelo.js
│  │  ├─ comentario-modelo.js
│  │  └─ cuenta-modelo.js
│  ├─ services
│  │  ├─ articulo-services.js
│  │  ├─ auth-services.js
│  │  └─ comentario-services.js
│  └─ utils
│     ├─ SistaleError.js
│     ├─ logger.js
│     └─ validateEmail.js
└─ swagger.yml
```

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/JoseLuisADA/sistaleApi.git
```

2. Instala las dependencias:

```bash
cd sistaleApi
npm install
```

3. Configura las variables de entorno según sea necesario.

4. Inicia el servidor:

```bash
npm start
```

## Documentación de la API

### Swagger

La documentación de la API está disponible en el archivo `swagger.yml`. Puedes cargar este archivo en cualquier herramienta compatible con Swagger, como [Swagger UI](https://swagger.io/tools/swagger-ui/) o [SwaggerHub](https://swagger.io/tools/swaggerhub/).

### Postman

También puedes importar la colección de Postman para probar la API. El archivo de la colección se encuentra en `SistaleAPI_postman_collection.json`.

- [Abrir SistaleAPI_postman_collection.json](./SistaleAPI_postman_collection.json)

## Uso

Una vez que el servidor esté en funcionamiento, puedes realizar solicitudes a las rutas de la API utilizando herramientas como Postman o cURL.

### Rutas principales:

- **Usuarios**
  - `POST /api/account/register` - Registrar un nuevo usuario
  - `POST /api/account/login` - Iniciar sesión
  - `POST /api/account/email-recover-password` - Recuperar contraseña por email
  - `POST /api/account/change-password` - Cambiar contraseña

- **Artículos**
  - `GET /api/articulo` - Obtener todos los artículos
  - `GET /api/articulo/:idArticulo` - Obtener un artículo por ID
  - `POST /api/articulo` - Crear un nuevo artículo
  - `PUT /api/articulo/:idArticulo` - Actualizar un artículo por ID
  - `DELETE /api/articulo/:idArticulo` - Eliminar un artículo por ID

- **Comentarios**
  - `GET /api/comentario/:idArticulo` - Obtener comentarios de un artículo
  - `POST /api/comentario` - Crear un nuevo comentario
  - `DELETE /api/comentario/:id` - Eliminar un comentario por ID

## Contribuciones

Se aceptan contribuciones. Por favor, crea un pull request para revisar tu propuesta.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo `LICENSE` para obtener más información.

---
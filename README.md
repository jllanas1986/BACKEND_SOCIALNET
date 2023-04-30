![](./assets/TSN_Banner.jpg)


# ÍNDICE
- [THESOCIALAPI](#trello-)
    - [Descripción del proyecto](#vista-tablero)

- [TRELLO](#trello-)
    - [Enlace al tablero de trabajo ONLINE del proyecto](#vista-tablero)
    - [Bloques de tareas y código visual](#vista-tablero)
    - [Vista general de las tareas](#vista-lista)

- [POSTMAN](#trello-)
    - [Enlace a la documentación y testing de la API online](#vista-tablero)
    - [Estructura de endpoints creados y testeados](#vista-tablero)

- [SWAGGER](#mongodb-investigación)
    - [Estructura de carpetas y check de instalación de la dependencia](#qué-es-mongodb)
 
- [MONGODB Atlas](#trello-)
    - [Vista del CLÚSTER que contiene la base de datos que nutre THESOCIALAPI](#vista-tablero)
 
- [ENDPOINTS de la API](#trello-)
    - [ENDPOINTS de la Colección: Usuarios](#vista-tablero)
    - [ENDPOINTS de la Colección: Publicaciones](#vista-tablero)
    - [ENDPOINTS de la Colección: Comentarios](#vista-lista)

- [Herramientas empleadas en el proyecto (TOOLSET) ](#authors-)

- [Authores](#authors-)



# THESOCIALAPI 📅
## Descripción del proyecto
[⬆️](#índice)

>*THESOCIALAPI es una plataforma online de ayuda a la creación y testing de redes sociales  mediante el uso de una base de datos pre-poblada y una API que permite realizar las operaciones standar con Usuarios, Publicaciones, Comentarios y Likes. *
>La plataforma lleva implementada características especiales como:

>- [X] Encriptación, validación de contraseñas y middleware de errores
>- [X] Tockens de inicio de sesión para autorizar ciertas operaciones CRUD
>- [X] Comprobación de la autoria de una publicación
>- [X] Comprobación de la autoria de un comentario
>- [X] Comprobación de privilegios como administrador
>- [X] Posibilidad de dar o quitar un LIKE a las publicaciones
>- [X] Posibilidad de paginar los resultados

>A nivel de plataformas utilizadas para el completo despliegue de THESOCIALAPI hemos empleado:

| PLATAFORMA    | USO |
| :-----------:   | :---------- |
|MongoDB Atlas| Aquí está la base de datos pre-poblada con la que efectuaremos las pruebas de conexión de la API.  |
|VERCEL          |Plataforma de despligue,donde se ejecuta el servidor que permite entregar información desde y hacia la base de datos. |

***
# TRELLO 📅
## Enlace al tablero de trabajo ONLINE del proyecto
[⬆️](#índice)
>[Ir a TRELLO](https://trello.com/b/s3Fk6LeJ)

## Bloques de tareas y código visual
[⬆️](#índice)
![](./assets/Trello_1.jpg)

>*Vista general del tablero creado para el proyecto THESOCIALAPI.*

## Vista general de las tareas
[⬆️](#índice)
![](./assets/Trello_2.jpg)

>*Vista general del tablero que contiene todas las tarjetas del proyecto THESOCIALAPI.*

***
# POSTMAN
## Enlace a la documentación y testing de la API online
[⬆️](#índice)
>[Ir a POSTMAN](https://documenter.getpostman.com/view/26580726/2s93eSZvCJ)


## Estructura de endpoints creados y testeados
[⬆️](#índice)
![](./assets/TSN_Postman_1)

***
# SWAGGER
## Estructura de carpetas y check de dependencia
[⬆️](#índice)
![](./assets/TSN_Swagger_1)
>Vista de la estructura de carpetas necesaria al instalar la dependencia que vincula el código con la plataforma de SWAGGER.

> __Note__
No es posible proporcionar ningún vínculo de testing de SWAGGER porque el deployment sobre VERCEL no está terminado.
> __Warning__
Se requiere modificar la estructura del index.js (project root) de manera muy específica.
***
# MONGODB Atlas
## Vista del CLÚSTER que contiene la base de datos que nutre THESOCIALAPI
[⬆️](#índice)
![](./assets/TSN_Atlas_1)
>Detalle del contenido del CLÚSTER que alija la base de datos mostrando sus tres colecciones:
    - Usuarios (USERS)
    - Publicaciones (POSTS)
    - Comentarios (COMMENTS)

***
# ENDPOINTS de la API
## ENDPOINTS de la Colección: Usuarios
[⬆️](#índice)

| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Crear usuario | POST  | /users/crear|


```js
const foundProduct = await Product.findByPk(req.params.id, {
                include:  { 
                    model: Category, 
                    attributes:["name"], 
                    through: { attributes: [] } //Excludes data from the junction table
                 }

```
## ENDPOINTS de la Colección: Publicaciones
[⬆️](#índice)

| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Crear usuario | POST  | /users/crear|


```js
const foundProduct = await Product.findByPk(req.params.id, {
                include:  { 
                    model: Category, 
                    attributes:["name"], 
                    through: { attributes: [] } //Excludes data from the junction table
                 }

```
## ENDPOINTS de la Colección: Comentarios
[⬆️](#índice)

| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Crear usuario | POST  | /users/crear|


```js
const foundProduct = await Product.findByPk(req.params.id, {
                include:  { 
                    model: Category, 
                    attributes:["name"], 
                    through: { attributes: [] } //Excludes data from the junction table
                 }

```


***
# Herramientas empleadas en el proyecto (TOOLSET) ⚙️
[⬆️](#índice)

>* [*TRELLO*](https://trello.com/) - Planificador de tareas (Versión: no disponible)
>* [*POSTMAN*](https://www.postman.com/) - Software para probar y documentar endpoints (Versión: 10.13.5)
>* [*SWAGGER*](https://swagger.io/) - Plataforma de documentación de API's (Versión: 4.6.2)
>* [*VISUAL STUDIO CODE*](https://code.visualstudio.com/) - Editor de código (Versión: 1.75.1)
>* [*NodeJS*](https://code.visualstudio.com/) - Entorno de ejecución para crear servidores en backend (Versión: 18.15.0)
>* [*Nodemon*](https://www.npmjs.com/package/nodemon/) - Herramienta para desarrollo que levanta el servidor automáticamente tras cada cambio realizado en el código (Versión: 18.15.0)
>* [*MONGODB*](https://www.mongodb.com//) - Gestor de base de datos (Versión: 6.0)
>* [*MONGOOSE*](https://mongoosejs.com/) - Herramienta de modelado de objetos para Node Js (Versión: 7.0.4)
>* [*ATLAS (MONGODB)*](https://cloud.mongodb.com/) - Alojamiento de MONGODB para la/s base/s de datos empleando clústers (Versión: 6.0)
>* [*BCRYPT*](https://code.visualstudio.com/) - Dependencia para la encriptación y comprobación de contraseñas (Versión: 1.4.3)
>* [*JASON WEB TOKEN*](https://code.visualstudio.com/) - Dependencia para generar tokens de acceso (Versión: 9.0.0)
>* [*DOTENV*](https://code.visualstudio.com/) - Dependencia para establecer las variables globales y poder desplegar (Versión: 16.0.3)
>* [*VERCEL*](https://code.visualstudio.com/) - Plataforma para el despliegue del servidor(Versión: 1.75.1)
>* [*Live Server*](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) -Extension de Visual Studio para check durante la fase de desarrollo y en entorno local.

***
# Autores ✒️
[⬆️](#índice)

**José LLanas** - | *Coding* | - [jllanas1986](https://github.com/jllanas1986)

**Joan Baldó** - | *Coding* | - [joanbaldo](https://github.com/joanbaldo)

***

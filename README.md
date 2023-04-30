![](./assets/TSN_Banner.jpg)


# ÍNDICE
- [THESOCIALAPI](#thesocialapi-)
    - [Descripción del proyecto](#descripción-del-proyecto)

- [TRELLO](#trello-)
    - [Enlace al tablero de trabajo ONLINE del proyecto](#enlace-al-tablero-de-trabajo-online-del-proyecto)
    - [Bloques de tareas y código visual](#bloques-de-tareas-y-código-visual)
    - [Vista general de las tareas](#vista-general-de-las-tareas)

- [POSTMAN](#postman)
    - [Enlace a la documentación y testing de la API online](#enlace-a-la-documentación-y-testing-de-la-api-online)
    - [Estructura de endpoints creados y testeados](#estructura-de-endpoints-creados-y-testeados)

- [SWAGGER](#swagger)
    - [Estructura de carpetas y check de instalación de la dependencia](#estructura-de-carpetas-y-check-de-dependencia)
 
- [MONGODB Atlas](#mongodb-atlas)
    - [Vista del CLÚSTER que contiene la base de datos que nutre THESOCIALAPI](#vista-del-clúster-que-contiene-la-base-de-datos-que-nutre-thesocialapi)
 
- [ENDPOINTS de la API](#endpoints-de-la-api)
    - [ENDPOINTS de la Colección: Usuarios](#endpoints-de-la-colección-usuarios)
    - [ENDPOINTS de la Colección: Publicaciones](#endpoints-de-la-colección-publicaciones)
    - [ENDPOINTS de la Colección: Comentarios](#endpoints-de-la-colección-comentarios)

- [Herramientas empleadas en el proyecto (TOOLSET) ](#herramientas-empleadas-en-el-proyecto-toolset-%EF%B8%8F)

- [Autores](#autores-%EF%B8%8F)



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
>Detalle del contenido del CLÚSTER que aloja la base de datos mostrando sus tres colecciones:
    - Usuarios (USERS)
    - Publicaciones (POSTS)
    - Comentarios (COMMENTS)

***
# ENDPOINTS de la API
## ENDPOINTS de la Colección: Usuarios
[⬆️](#índice)

| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Crear usuario | POST  | localhost:8080/users/register|

>Body-> raw (json)
```js
{
    "name":"Sofia",
    "email": "sofia@sofia.com",
    "password": "123456",
    "age":"25"
}
```
| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Login usuario | POST  | localhost:8080/users/login|

>Body-> raw (json)
```js
{
    "email": "sofia@sofia.com",
    "password": "123456"
}
```
| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Logout usuario | DELETE | localhost:8080/users/logout|

>HEADERS -> Authorisation

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA

>Body-> raw (json)
```js
{
    "email": "sofia@sofia.com",
    "password": "123456"
}
```
| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Eliminar usuario | DELETE | localhost:8080/users/deleteUserById/|

> __Warning__
Se requiere estar logueado como ADMIN para realizar esta operación.

>HEADERS -> Authorisation
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA'

>Params -> User_ID
'644652ed8c643dc5abe8eb46'
| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Ver usuario por su ID | GET | localhost:8080/users/getById/|

>Params -> User_ID
'644652ed8c643dc5abe8eb46'

## ENDPOINTS de la Colección: Publicaciones
[⬆️](#índice)

| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Crear publicación | POST | localhost:8080/posts/create|

>HEADERS -> Authorisation

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA

>Body-> raw (json)
```js
{
    "title": "Sofia, the alumni killer",
    "body": "Y si...olvidó mi cumple",
    "userId" :"644652ed8c643dc5abe8eb46"
}
```
| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Actualizar publicación | PUT | localhost:8080/posts/update/|

>HEADERS -> Authorisation

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA

>Body-> raw (json)
```js
{
    "title": "Post 2 UPDATED",
    "body": "Así vemos QUE SÍ varia este contenido"
}
```
| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Borrar publicación | DELETE | localhost:8080/posts/delete/|


>HEADERS -> Authorisation
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA'

>Params -> Publicación_ID
'644672e7725ae01cac4808f0'

| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Mostrar publicación por ID | GET | localhost:8080/posts/postsById/|


>HEADERS -> Authorisation
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA'

>Params -> Publicación_ID
'644672e7725ae01cac4808f0'


| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Mostrar publicación por título | GET | localhost:8080/posts/postsByTitle|


>HEADERS -> Authorisation
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA'

>Params -> Título
'Palabras que contengan título'


| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Todas los usuarios+publ+coment | GET | localhost:8080/posts/getAllPosts|


>HEADERS -> Authorisation
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA'


| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Ver publicaciones paginadas | GET | localhost:8080/posts/getPostsPaginated?page=1&limit=10|


>HEADERS -> Authorisation
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA'

>Params -> 
-page : 1
-limit: 10


| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Dar LIKE a publicación | PUT | localhost:8080/posts/likes/|


>HEADERS -> Authorisation
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA'

>Params -> Publicación_ID

| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Quitar LIKE a publicación | DELETE | localhost:8080/posts/dislike/|


>HEADERS -> Authorisation
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA'

>Params -> Publicación_ID


## ENDPOINTS de la Colección: Comentarios
[⬆️](#índice)

| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Crear comentario | POST | localhost:8080/comments/create|

>HEADERS -> Authorisation

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA

>Body-> raw (json)
```js
{
    "commentTitle" : "Comentario para borrar",
    "commentBody": "Comentario para borrar",
    "userId": "644652ed8c643dc5abe8eb46",
    "postId" : "644672b7725ae01cac4808ed"
}
```
| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Borrar comentario | DELETE | localhost:8080/comments/delete/|


>HEADERS -> Authorisation
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA'

>Params -> Comentario_ID

| ACCÍON  | OPERACIÓN CRUD | RUTA
| :-----------:   | :---------- | :----------- |
|Crear comentario por ID public.| POST | localhost:8080/comments/commentByPostId/|

>HEADERS -> Authorisation

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2NTJlZDhjNjQzZGM1YWJlOGViNDYiLCJpYXQiOjE2ODIzMzA5MzR9.5bva2ATkY3EnTk6MupZQdz87Hb7YXxivv7tdQqs0EKA

>Body-> raw (json)
```js
{
    "commentTitle" : "Comentario KILLER ",
    "commentBody": "Es mentira"
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

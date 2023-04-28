const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const { handleTypeError }= require('./middlewares/errors');
const { dbConnection } = require("./config/config");
const swaggerUI = require('swagger-ui-express') //Importamos SWAGGER
const docs = require('./docs/index') // Ruta hacia el index.js de swagger



app.use(express.json());

dbConnection();

// RUTAS IMPORTADAS
app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comments'));
app.use('/users', require('./routes/users'));

app.use(handleTypeError)
 
//AHORA LAS RUTAS PARA SWAGGER
// app.use("/tasks", require("./routes/tasks"));

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs)) // La ruta hacia la DOCUMENTACIÓN DE LA API! OJO
//El (docs) de arriba (linea 26) refiere al de la linea 8. Todo lo que contenga ese doscs lo mostraremos en el endpoint de la documentación ES DECIR...contendrá todo lo que el docs> index.js contenga.


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

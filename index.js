const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const { handleTypeError }= require('./middlewares/errors');
const { dbConnection } = require("./config/config");



app.use(express.json());

dbConnection();

// RUTAS IMPORTADAS
app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comments'));
app.use('/users', require('./routes/users'));

app.use(handleTypeError)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

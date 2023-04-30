const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const { jwt_secret } = require("../config/keys.js"); //ya no importa porque no existe el archivo
require("dotenv").config();

const UserController = {
  //ENDPOINT: CREAR usuario
  async register(req, res, next) {
    req.body.role = "user";
    const password = req.body.password;
    let hashedPassword;
    if (password) {
      hashedPassword = bcrypt.hashSync(password, 10); ///encriptando clave de acceso
    }
    try {
      const user = await User.create({ ...req.body, password: hashedPassword });
      res.status(201).send({ message: "Usuario registrado con exito", user });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  //ENDPOINT: LOGUEAR usuario
  async login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      });
      if (!user) {
        return res.status(400).send({ msg: "Correo o contraseña incorrectos" });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).send({ msg: "Correo o contraseña incorrectos" });
      }
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      if (user.tokens.length > 4) user.tokens.shift;
      user.tokens.push(token);
      await user.save();
      res.send({ msg: "Bienvenid@ " + user.name, token });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Ha habido un error al logearte", error });
    }
  },

  //ENDPOINT: LOGOUT
  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });
      res.send({ message: "Desconectado con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Hubo un problema al intentar desconectar al usuario",
      });
    }
  },

  //ENDPOINT: BORRAR usuarios (solo como administrador)
  async delete(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params._id);
      res.send({ user, message: "User deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "there was a problem trying to remove the user",
      });
    }
  },

  //ENDPOINT: MOSTRAR información usuario con sus Posts y Comments
  async getInfo(req, res) {
    try {
      const user = await User.findById(req.user._id).populate({
        path: "postIds",
        populate: {
          path: "commentIds",
        },
      });
      res.send(user);
    } catch (error) {
      console.error(error);
    }
  },

  //ENDPOINT: MOSTRAR usuario por id
  async getById(req, res) {
    try {
      const user = await User.findById(req.params._id);

      res.send(user);
    } catch (error) {
      console.error(error);
    }
  },

  //ENDPOINT: MOSTRAR usuario por indice(NO FUNCIONA)
  async getUsersByName(req, res) {
    try {
      const users = await User.find(
        { 
          $text:{
        $search: req.params.name,
        }, 
      });
      
      res.send(users);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = UserController;

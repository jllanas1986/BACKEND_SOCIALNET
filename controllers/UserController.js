const User = require("../models/User");
const bcrypt = require ('bcryptjs');

const UserController = {
  async register(req, res) {
    req.body.role = "user";
    const password = req.body.password;
    let hashedPassword;
    if(password) {
      hashedPassword = bcrypt.hashSync(password, 10) ///encriptando clave de acceso
    };
    try {
      const user = await User.create({...req.body, password: hashedPassword});
      res.status(201).send({ message: "Usuario registrado con exito", user });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = UserController;

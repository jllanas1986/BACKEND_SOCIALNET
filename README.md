## Esto es un comentario del crack-2

*HI JOSPH*
jose2
jose3
JOAN 69

joan 1978

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
      res.send({ msg: "Bienvenid@ " + user.name, token, user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Ha habido un error al logearte", error });
    }
  },
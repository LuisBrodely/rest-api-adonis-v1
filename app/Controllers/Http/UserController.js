'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request }) {
    //De todo lo que recibe debe buscar email, username, password
    const { email, password } = request.all()
    const user = await User.create({
      username: email,
      email,
      password
    })
    return user
  }
}

module.exports = UserController

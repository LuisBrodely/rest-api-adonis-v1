'use strict'

const User = use('App/Models/User')

class UserController {

  async login({ request, auth }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    return token
  }

  async store({ request }) {
    //De todo lo que recibe debe buscar email, username, password
    const { email, password } = request.all()
    const user = await User.create({
      username: email,
      email,
      password
    })
    return this.login(...arguments)
  }
}

module.exports = UserController

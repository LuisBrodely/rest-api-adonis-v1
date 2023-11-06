'use strict'

class ProjectController {

  async index({ request, auth, }) {
    const user = await auth.getUser()

    return await user.projects().fetch()
  }

}

module.exports = ProjectController

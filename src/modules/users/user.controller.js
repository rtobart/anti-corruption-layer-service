import { UserService } from "./user.service.js"
const userService = new UserService()

export class UserController {
    constructor() {
        console.log('Initialize User Controller')
    }
    async getUsers(req, res) {
        const serviceResponse = await userService.getUsers()
        res.send(serviceResponse)
    }
    async validateUser(req, res) {
        const user = req.body
        const serviceResponse = await userService.validateUser(user)
        res.send(serviceResponse)
    }
}

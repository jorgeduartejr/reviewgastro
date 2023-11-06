import User from "App/Models/User";

export default class UserServices {
    constructor() { }

    public async create(email: string, password: string) {
        const user = await User.create({ email, password })
        
        return user
    }
}
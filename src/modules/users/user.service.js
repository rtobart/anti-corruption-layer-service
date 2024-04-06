import { firestore } from '../../db/firestore/config/config.js'
export class UserService {
    constructor() {
        console.log('Initialize User Service')
    }
    async getUsers() {
        const docs = await firestore.collection('coleccion').get();
        const data = docs.docs.map(doc => doc.data());
        return {
            users: data.map(user => { return {name: user.userName} })
        }
    }
}
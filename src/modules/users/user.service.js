import { firestore } from '../../db/firestore/config/config.js'
export class UserService {
    constructor() {
        console.log('Initialize User Service')
    }
    async getUsers() {
        const docs = await firestore.collection('coleccion').get();
        const data = docs.docs.map(doc => doc.data());
        return data.map(user => { return {name: user.userName} })
    }
    async validateUser(user) {
        try {
            const docs = await firestore
                .collection('coleccion')
                .where('personalMail', '==', user.email)
                .where('passwordHash', '==', user.password)
                .get();
            const data = docs.docs.map(doc => doc.data());
            if (data.length === 0) return false;
            return true
        } catch (error) {
            return false;
        }
    }
}
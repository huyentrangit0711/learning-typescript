// import { Collection } from './models/Collection';
import { User } from './models/User'
/*
EXAMPLE user
*/
const user = User.buildUser({id: 1})
user.on('change', () => {
    console.log('User is changed', user)
})
user.trigger('change')
user.set({name: 'String', age: 40})
/*
EXAMPLE userCollection
*/


// const userCollection = User.buildUserCollection()
// userCollection.on('change', () => {
//     console.log('update data', userCollection)
// })
// userCollection.fetch()
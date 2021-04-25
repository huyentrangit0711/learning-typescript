import { User } from './models/User';
const user = new User({ id: 1 })
user.fetch()
setTimeout((): void => {
    console.log(user)
}, 4000)
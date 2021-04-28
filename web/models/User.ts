import { Collection } from './Collection';
import { Sync } from './Sync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { Model } from './Model'
export interface UserData {
    id?: number,
    name?: string,
    age?: number
}

const rootUrl = 'http://localhost:3000/users'
export class User extends Model<UserData>{
    static buildUser(attrs: UserData): User {
        return new User(
            new Attributes<UserData>(attrs),
            new Eventing(),
            new Sync<UserData>(rootUrl)
        )
    }
    static buildUserCollection(): Collection<User, UserData> {
        return new Collection(
            rootUrl,
            (json: UserData) => User.buildUser(json)
        )
    }




}
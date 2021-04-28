import { Eventing } from './Eventing';
import { UserData as UserProps } from './User'
import axios, { AxiosResponse } from 'axios'
// K is UserProps
// T is with object User
export class Collection<T, K > {
    models: T[] = []
    events: Eventing = new Eventing()
    constructor(
        public rootUrl: string,
        public deserialize:(json: K)=> T
    ) {}
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    fetch():void {
        axios.get(this.rootUrl).then((response: AxiosResponse) => {
            response.data.forEach((element: K) => {
                const buildUser = this.deserialize(element)
                this.models.push(buildUser)
            });
        })
        this.trigger('change')
    }
}
import axios, { AxiosPromise } from 'axios'
import { UserData } from './User'
export class Sync {
    constructor(public rootUrl: string) { }
    // fetch by id
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`)
    }
    // saving data if id is not backend re-present
    saving(data: UserData): AxiosPromise {
        const { id } = data
        if (id) {
            //PUT
            return axios.put(`${this.rootUrl}/${this.get('id')}`, data)
        } else {
            // POST
            return axios.post(this.rootUrl, data)
        }
    }
}
//// Option #1 use function arguments on class Sync
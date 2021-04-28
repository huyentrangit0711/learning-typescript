import axios, { AxiosPromise } from 'axios'
export interface HasId {
    id?: number
}
export class Sync<T extends HasId> {
    constructor(public rootUrl: string) { }
    // fetch by id
    
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`)
    }
    // saving data if id is not backend re-present
    saving(data: T): AxiosPromise {
        const { id } = data
        if (id) {
            //PUT
            return axios.put(`${this.rootUrl}/${id}`, data)
        } else {
            // POST
            return axios.post(this.rootUrl, data)
        }
    }
}
//// Option #3 use generics class
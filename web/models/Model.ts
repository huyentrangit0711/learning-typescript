import { AxiosPromise, AxiosResponse } from 'axios'
import { HasId } from './Sync'
interface ModelAttributes<T> {
    getAll():T
    set(updateData: T): void
    get<K extends keyof T>(key: K): T[K]

}
interface Events {
    on(eventName: string, callback: () => void): void
    trigger(eventName: string): void
}
interface Sync<T> {
    fetch(id: number):AxiosPromise
    saving(data:T): AxiosPromise
}
export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) {}

    get get() {
        return this.attributes.get;
    }
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    set(updateData: T): void {
        this.attributes.set(updateData)
    }
    fetch() {
        const id = this.get('id')
        if (typeof id !== 'number') {
            throw new Error('Cannot fetch data with id is provided')
        }
        this.sync.fetch(id).then((response: AxiosResponse) => {
            this.set(response.data)
        })
    }
    save() {
        const savingData = this.attributes.getAll()
        this.sync.saving(savingData).then((response: AxiosResponse): void => {
            this.trigger('change')
            
        }).catch(() => {
            this.trigger('error')
        })
    }

}
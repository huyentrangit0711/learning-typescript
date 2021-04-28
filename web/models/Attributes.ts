
export class Attributes<T> {
    constructor(private data: T) { }
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key]
    }
    //set value to data
    set(updateData: T): void {
        Object.assign(this.data, updateData)
    }
    // add on event attach on User class
    getAll():T {
        return this.data
    }
}
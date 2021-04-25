export class Attributes<T> {
    constructor(private data: T) { }
    // refactor use generics constraint
    get(propName: string): number | string | boolean {
        return this.data[propName]
    }
    //set value to data
    set(updateData: T): void {
        Object.assign(this.data, updateData)
    }
    // add on event attach on User class
}
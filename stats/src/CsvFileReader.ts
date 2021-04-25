import fs from 'fs'
//10/08/2018,Man United,Leicester,2,1,H,A Marriner
export abstract class CsvFileReader<T> {
    data: T[] = []
    constructor(public fileName: string) { }
    abstract mapRow(row: string[]): T;
    read(): void {
        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        }).split('\n')
            .map((row: string): string[] => row.split(','))
            .map(this.mapRow)
    }

}
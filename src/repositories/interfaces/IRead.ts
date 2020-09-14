export interface IRead<T>{
    find(query: any): Promise<T[]>;
    findOne(id: string): Promise<T>;
    findN(query:any,limit:number): Promise<T[]>;
}
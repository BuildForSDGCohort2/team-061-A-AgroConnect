export interface IRead<T> {
    find(query: any): Promise<T[] | null>;
    findOne(id: string): Promise<T | null>;
    findN(query: any, limit: number): Promise<T[] | null>;
}
export interface IWrite<T>{
    create(item: T): Promise<any>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<boolean>;
}
export interface IStorage {
    getItem(key: string): string | null;
    setItem(key: string, value:string): void;
    removeItem(key: string): void;
}

export interface ITask {
    id: number;
    task: string
}
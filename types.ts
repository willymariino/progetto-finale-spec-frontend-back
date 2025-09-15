export type Product = {
    title: string;
    category: string;
    ram: string;
    internal_memory: string;
    cpu: string;
    gpu: string;
    cooling?: string;
    optionals: string[];
    price: number;
    description: string;
};
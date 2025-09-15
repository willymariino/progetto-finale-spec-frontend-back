export type Product = {
    title: string;
    category: string;
    ram: (number | string);
    internal_memory: (number | string);
    cpu: string;
    gpu: string;
    cooling?: (string | null);
    optionals: string[];
    price: number;
    description: string;
};
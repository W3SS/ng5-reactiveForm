/* Defines the product entity */
export interface IProduct {
    rank: number;
    title: string;
    distributor: string;
    tags?: string[];
    worldwideGross: string;
    img: string;
}
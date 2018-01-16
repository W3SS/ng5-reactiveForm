/* Defines the product entity */
export interface IProduct {
    id:number;
    rank: number;
    title: string;
    distributor: string;
    tags?: string[];
    worldwideGross: string;
    img: string;
    rating : number;
}
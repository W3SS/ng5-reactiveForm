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
    directedBy ?:string;
    producedBy?:string;
    storyBy?:string;
    starring?:string;
    releaseDate?:string;
    runningTime?:string;
    budget?:string;
}
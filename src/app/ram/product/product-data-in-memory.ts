import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IProduct } from './products';

export class ProductDataInMemory implements InMemoryDbService {

    createDb() {
        let product: IProduct[] = [
            {
                'id':10,
                'rank': 1,
                'title': 'tiger zinda hai',
                'distributor': 'yash raj films',
                'worldwideGross': '504.75',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Tiger_Zinda_Hai_-_Poster.jpg/220px-Tiger_Zinda_Hai_-_Poster.jpg',
                'rating': 4,
                'tags':['action','romantic', 'thriller'],
                'directedBy':'Ali Abbas Zafar',
                'producedBy' : 'Aditya Chopra',
                'storyBy' : 'Ali Abbas Zafar,Neelesh Misra',
                'starring' : 'Salman Khan,Katrina Kaif',
                'releaseDate' : '22 December 2017',
                'runningTime' : '161 minutes',
                'budget' : '210'
            },
            {
                'id':1,
                'rank': 2,
                'title': 'golmaal again',
                'distributor': 'reliance entertainment',
                'worldwideGross': '309.43',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Ajay_Devgn%27s_Golmaal_Again_poster.jpg/220px-Ajay_Devgn%27s_Golmaal_Again_poster.jpg',
                'rating': 4.2,
                'tags':['action', 'thriller', 'comedy']
            },
            {
                'id':2,
                'rank': 3,
                'title': 'raees',
                'distributor': 'red chillies entertainment',
                'worldwideGross': '308.88',
                'img': 'https://upload.wikimedia.org/wikipedia/en/2/2b/Raees_Poster.jpg',
                'rating': 4.1,
                'tags':['romantic', 'thriller']
            },
            {
                'id':3,
                'rank': 4,
                'title': 'judwaa 2',
                'distributor': 'fox star studios',
                'worldwideGross': '227.59',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Judwaa_2_Poster.jpg/220px-Judwaa_2_Poster.jpg',
                'rating': 4.4,
                'tags':['action','romantic', 'thriller', 'comedy']
            },
            {
                'id':4,
                'rank': 5,
                'title': 'toilet: ek prem katha',
                'distributor': 'viacom 18 motion pictures',
                'worldwideGross': '216.58',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Toilet_Ek_Prem_Katha.jpg/220px-Toilet_Ek_Prem_Katha.jpg',
                'rating': 4.5,
                'tags':['romantic',  'comedy']
            },
            {
                'id':5,
                'rank': 6,
                'title': 'tubelight',
                'distributor': 'salman khan films',
                'worldwideGross': '211.14',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Tubelight_Poster.jpg/220px-Tubelight_Poster.jpg',
                'rating': 3.5,
                'tags':[ 'thriller']
            },
            {
                'id':6,
                'rank': 7,
                'title': 'kaabil',
                'distributor': 'filmkraft productions pvt. ltd',
                'worldwideGross': '209.5',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Kaabil_Movie_Poster.jpg/220px-Kaabil_Movie_Poster.jpg',
                'rating': 4,
                'tags':['action','thriller']
            },
            {
                'id':7,
                'rank': 8,
                'title': 'badrinath ki dulhania',
                'distributor': 'dharma productions',
                'worldwideGross': '200.34',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Badrinath_Ki_Dulhania_Cover.jpg/220px-Badrinath_Ki_Dulhania_Cover.jpg',
                'rating': 4.1,
                'tags':['action','romantic',  'comedy']
            },
            {
                'id':8,
                'rank': 9,
                'title': 'jolly llb 2',
                'distributor': 'Fox Star Studios',
                'worldwideGross': '197.33',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Jolly_LLB_2_first_look.jpg/220px-Jolly_LLB_2_first_look.jpg',
                'rating': 4.2,
                'tags':['action', 'thriller', 'comedy']
            },
            {
                'id':9,
                'rank': 10,
                'title': 'jab harry met sejal',
                'distributor': 'red chillies entertainment',
                'worldwideGross': '150.06',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/JHMS2017.jpg/220px-JHMS2017.jpg',
                'rating': 3.4,
                'tags':['romantic']
            },

        ];
        return { product };
    }
}
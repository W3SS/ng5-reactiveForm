import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IProduct } from './products';

export class ProductDataInMemory implements InMemoryDbService {

    createDb() {
        let product: IProduct[] = [
            {
                'id':0,
                'rank': 1,
                'title': 'Tiger Zinda Hai',
                'distributor': 'Yash Raj Films',
                'worldwideGross': '504.75',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Tiger_Zinda_Hai_-_Poster.jpg/220px-Tiger_Zinda_Hai_-_Poster.jpg',
                'rating': 4
            },
            {
                'id':1,
                'rank': 2,
                'title': 'Golmaal Again',
                'distributor': 'Reliance Entertainment',
                'worldwideGross': '309.43',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Ajay_Devgn%27s_Golmaal_Again_poster.jpg/220px-Ajay_Devgn%27s_Golmaal_Again_poster.jpg',
                'rating': 4.2
            },
            {
                'id':2,
                'rank': 3,
                'title': 'Raees',
                'distributor': 'Red Chillies Entertainment',
                'worldwideGross': '308.88',
                'img': 'https://upload.wikimedia.org/wikipedia/en/2/2b/Raees_Poster.jpg',
                'rating': 4.1
            },
            {
                'id':3,
                'rank': 4,
                'title': 'Judwaa 2',
                'distributor': 'Fox Star Studios',
                'worldwideGross': '227.59',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Judwaa_2_Poster.jpg/220px-Judwaa_2_Poster.jpg',
                'rating': 4.4
            },
            {
                'id':4,
                'rank': 5,
                'title': 'Toilet: Ek Prem Katha',
                'distributor': 'Viacom 18 Motion Pictures',
                'worldwideGross': '216.58',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Toilet_Ek_Prem_Katha.jpg/220px-Toilet_Ek_Prem_Katha.jpg',
                'rating': 4.5
            },
            {
                'id':5,
                'rank': 6,
                'title': 'Tubelight',
                'distributor': 'Salman Khan Films',
                'worldwideGross': '211.14',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Tubelight_Poster.jpg/220px-Tubelight_Poster.jpg',
                'rating': 3.5
            },
            {
                'id':6,
                'rank': 7,
                'title': 'Kaabil',
                'distributor': 'Filmkraft Productions Pvt. Ltd',
                'worldwideGross': '209.5',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Kaabil_Movie_Poster.jpg/220px-Kaabil_Movie_Poster.jpg',
                'rating': 4
            },
            {
                'id':7,
                'rank': 8,
                'title': 'Badrinath Ki Dulhania',
                'distributor': 'Dharma Productions',
                'worldwideGross': '200.34',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Badrinath_Ki_Dulhania_Cover.jpg/220px-Badrinath_Ki_Dulhania_Cover.jpg',
                'rating': 4.1
            },
            {
                'id':8,
                'rank': 9,
                'title': 'Jolly LLB 2',
                'distributor': 'Fox Star Studios',
                'worldwideGross': '197.33',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Jolly_LLB_2_first_look.jpg/220px-Jolly_LLB_2_first_look.jpg',
                'rating': 4.2
            },
            {
                'id':9,
                'rank': 10,
                'title': 'Jab Harry Met Sejal',
                'distributor': 'Red Chillies Entertainment',
                'worldwideGross': '150.06',
                'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/JHMS2017.jpg/220px-JHMS2017.jpg',
                'rating': 3.4
            },

        ];
        return { product };
    }
}
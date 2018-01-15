import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle:string = 'Page Title ';
  rank:number;
  imgwidth:number = 100;

  moviesDetails =
    {
      'rank':this.rank,
      'title':'Tiger Zinda Hai',
      'distributor':'Yash Raj Films',
      'worldwideGross':'504.75',
      'img': 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Tiger_Zinda_Hai_-_Poster.jpg/220px-Tiger_Zinda_Hai_-_Poster.jpg',
      'DirectedBy':'Ali Abbas Zafar',
      'ProducedBy' : 'Aditya Chopra',
      'StoryBy' : 'Ali Abbas Zafar,Neelesh Misra',
      'Starring' : 'Salman Khan,Katrina Kaif',
      'ReleaseDate' : '22 December 2017',
      'Running time' : '161 minutes',
      'Budget' : '210'
    }
  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.rank = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${this.rank}`;
  }

  onBack():void{
    this._router.navigate(['/product']);
  }
  onTrash():void{
    console.log('trash click');
    console.log(this.rank);
  }
  onEdit():void{
    console.log('edit click');
  }
}

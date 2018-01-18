import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle:string = 'Page Title ';
  rank:number;
  imgwidth:number = 100;
  errorMessage: string;
  moviesDetails:any[];
  private sub:Subscription;
 
  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service : ProductServiceService) { }

  ngOnInit() {
    this.rank = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${this.rank}`;

    // here get product details id 
    this.sub = this._route.params.subscribe(
        params => {
            let id = +params['id'];
            this.getProductDetail(id);
    });
    
    

  }

  
  getProductDetail(id: number) {
      this._service.getProductDetail(id).subscribe(
          data => {
            console.log(data);
            this.moviesDetails = data;
          },
          error => this.errorMessage = <any>error);
  }

  onBack():void{
    this._router.navigate(['/product']);
  }

  onEdit():void{
    this._router.navigate(['/product/edit', this.rank]);
  }

  addNewOne(){
    console.log('yes add to one');
    this._router.navigate(['/product/edit/0']);
  }
}

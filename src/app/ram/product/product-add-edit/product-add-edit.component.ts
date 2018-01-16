import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {

  pageTitle:string = 'Page Title ';
  rank:number;
  imgwidth:number = 100;
  errorMessage: string;
  moviesDetails:any[];
  private sub:Subscription;

  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service : ProductServiceService
  ) { }

  ngOnInit() {
    this.rank = +this._route.snapshot.paramMap.get('id');
    //this.pageTitle += `: ${this.rank}`;

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
  onTrash():void{
    console.log('trash click');
    console.log(this.rank);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  pageTitle:string = 'Page Title goes here';

  constructor() { }

  ngOnInit() {
  }

}

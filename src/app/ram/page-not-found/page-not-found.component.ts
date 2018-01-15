import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  pageTitle:string = '404 Not Found Error';
  pageNotFound:string = 'Page not found';
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onBack():void{
    this._router.navigate(['/home']);
  }

}





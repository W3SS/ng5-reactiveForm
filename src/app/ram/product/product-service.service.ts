import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IProduct } from './products';

@Injectable()
export class ProductServiceService {

  private baseUrl = 'api/product';

  constructor(private http:Http) { }

  // get list detials api is here 
  getProducts():Observable<IProduct[]>{
    return this.http.get(this.baseUrl)
    .map(this.extractData)
    .do(data => console.log('getProducts: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private extractData(response: Response) {
      let body = response.json();
      return body.data || {};
  }

  private handleError(error: Response): Observable<any> {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }

}

import {Injectable} from '@angular/core';

import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Product} from '../shared/Entities/product';
import {Observable} from 'rxjs/Observable';
import {BACKEND_URL} from '../shared/environment';


@Injectable()
export class ProductService {
  [x: string]: any;

  constructor(private http: HttpClient) {
  }


  getProducts(): Observable<Product[]> {
    console.log(BACKEND_URL);
    return this.http.get<Product[]>(BACKEND_URL);
  }


  deleteProduct(id) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete(BACKEND_URL + id, {headers: headers, responseType: 'text'});
  }

  private extractData(res: Response) {
    return res.text() ? res.json() : {};
  }

  // tryGetJson = async (resp) => {
  //   return new Promise((resolve) => {
  //     if (resp) {
  //       resp.json().then(json => resolve(json)).catch(() => resolve(null));
  //     } else {
  //       resolve(null);
  //     }
  //   });
  // };

  parseJSON(response) {
    return response.text() ? JSON.parse(response) : null;
  }

  saveProduct(product) {
    let test = JSON.stringify(product);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(BACKEND_URL, JSON.parse(test));
  }

  updateProduct(product) {
    let test = JSON.stringify(product);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(BACKEND_URL, JSON.parse(test));
  }

  getProductById(id) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(BACKEND_URL + id, {headers: headers, responseType: 'text'});
  }




}

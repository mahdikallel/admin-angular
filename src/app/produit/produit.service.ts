import {Injectable} from '@angular/core';

import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Product} from '../shared/Entities/product';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ProductService {
  [x: string]: any;

  constructor(private http: HttpClient) {
  }


  getProducts(): Observable<Product[]> {

    // this.http.get('http://localhost:9090/Produits').subscribe(
    //   sucess => {
    //     console.log(sucess);
    //   }, error => {
    //     console.log(error);
    //   });

    return this.http.get<Product[]>('http://localhost:9090/Produits');

  }


  saveProduct(product: Product) {
    this.http.post('http://localhost:9090/Produits', product).subscribe(
      sucess => {
        console.log(sucess);
      }, error => {
        console.log(error);
      }
    );
  }


  updateProduct(product: Product) {
    this.http.put('http://localhost:9090/Produits', product).subscribe(
      sucess => {
        console.log(sucess);
      }, error => {
        console.log(error);
      }
    );
  }

  getProductById(id: Number) {

    this.http.get('http://localhost:9090/Produits').subscribe(
      sucess => {
        console.log(sucess);
      }, error => {
        console.log(error);
      }
    );
  }

  deleteProduct(id) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete('http://localhost:9090/Produits/' + id,{headers: headers, responseType: 'text'});
  }

  private extractData(res: Response) {
    console.log(res);
    return res.text() ? res.json() : {};
    ;
  }


}




import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';


import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Product} from '../shared/Entities/product';


@Injectable()
export class ProductService {
  [x: string]: any;

  constructor(private http: HttpClient) {
  }


  getProducts() {
    this.http.get('http://localhost:9090/Produits').subscribe(
      sucess => {
        console.log(sucess);
      }, error => {
        console.log(error);
      });
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

  getProducById(id: Number) {

    this.http.get('http://localhost:9090/Produits').subscribe(
      sucess => {
        console.log(sucess);
      }, error => {
        console.log(error);
      }
    );
  }

  deleteProduct(id) {
    this.http.delete('http://localhost:9090/Produits', id).subscribe(
      sucess => {
        console.log(sucess);
      }, error => {
        console.log(error);
      }
    );
  }

}




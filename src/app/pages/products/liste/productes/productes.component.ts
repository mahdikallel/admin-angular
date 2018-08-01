import { Component, OnInit, OnDestroy } from '@angular/core';


import { Product } from '../../../../shared/Entities/product';
import { ProductService } from '../product.service';
//import { product } from '../prod';

@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.css'],
  providers: [ProductService]

})
export class ProductComponent implements OnInit, OnDestroy {
  selectedproduct: Product;

  /*  private newMethod(): string {
     return './productes.component.css';
   } */

  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
  }

  //selectedHero: product;

  productes: Product[];

  product: Product;

  constructor(private prodService: ProductService) {
    alert("test");
    console.log("constructor : init ProductComponent ");
  }

  ngOnInit() {

    console.log("init ProductComponent ");
    // this.prodService.getProducts();
    // this.prodService.getProducById(5);
    /*  this.product = {
       id:0 ,
       nom: "Produit X",
       prix: 50,
       prixAchat: 35
     } */
    // this.prodService.saveProduct(this.product);


    this.product = {
      id: 3,
      nom: "Produit X",
      prix: 50,
      prixAchat: 35
    }

    // this.prodService.updateProduct(this.product);
    // this.prodService.deleteProduct(this.product);
  }

  onSelect(product: Product): void {
    // this.selectedproduct = product;
  }

  getproductes(): void {
    this.prodService.getproductes()
      .subscribe(productes => this.productes = productes);
  }


  récapproductes(): void {
    this.prodService.getproductes()
      .subscribe(productes => this.productes = productes);
  }
}

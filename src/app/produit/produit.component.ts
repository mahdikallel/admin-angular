import {Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from '../shared/Entities/product';
import {ProductService} from './produit.service';

@Component({
  selector: 'app-productes',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
  providers: [Product]
})


export class ProductComponent implements OnInit, OnDestroy {
  selectedproduct: Product;

  productes: Product[];

  product: Product;

  private newMethod(): string {
    return './productes.component.css';
  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }


  constructor(private prodService: ProductService) {
    alert('test');
    console.log('constructor : init ProductComponent ');
  }

  ngOnInit() {
    console.log('init ProduitComponent ');
    this.prodService.getProducts();
    this.newMethod();
    this.product = {
      id: 0,
      nom: 'Produit X',
      prix: 50,
      prixAchat: 35
    };
    this.prodService.saveProduct(this.product);
    // this.prodService.updateProduct(this.product);
    //  this.prodService.deleteProduct(this.product);
  }

  onSelect(product: Product): void {
    this.selectedproduct = product;
  }
}

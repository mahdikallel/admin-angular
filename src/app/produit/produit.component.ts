import{Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from '../shared/Entities/product';
import {ProductService} from './produit.service';


@Component({
  selector: 'app-productes',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
  providers: [Product]
})


export class ProductComponent implements OnInit, OnDestroy {

  products: Product[];

  product: Product;

  private newMethod(): string {
    return './productes.component.css';
  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }


  constructor(private prodService: ProductService) {
    // alert('test');
    console.log('constructor : init ProductComponent ');
  }

  ngOnInit() {
    console.log('init ProduitComponent ');

    this.getAllProduct();
    /*this.prodService.getProducts();
    this.newMethod();
    this.product = {
      id: 3,
      nom: 'Produit X',
      prix: 50,
      prixAchat: 35
    };
   // this.prodService.saveProduct(this.product);
   // this.prodService.updateProduct(this.product);
    this.prodService.deleteProduct(this.product);
   //this.prodService.getProductById(this.product);*/

  }


  getAllProduct() {
    this.prodService.getProducts().subscribe(sucess => {
      this.products = sucess;
    }, error => {
      console.log('Get all Products not available' + error);
    });

  }

  addProduct(product: Product) {
    /*let product = product;
    product = this.product;*/
  }


}

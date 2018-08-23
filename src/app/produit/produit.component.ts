import {Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from '../shared/Entities/product';
import {ProductService} from './produit.service';
import {Router} from '@angular/router';

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



  constructor(private prodService: ProductService, private router: Router) {
    // alert('test');
    console.log('constructor : init ProductComponent ');
  }

  ngOnInit() {
    console.log('init ProduitComponent ');

    this.getAllProduct();
  }


  getAllProduct() {
    console.log('getAllProduct');
    this.prodService.getProducts().subscribe(sucess => {
      console.log('Get all Products  sucess');
      this.products = sucess;
    }, error => {
      console.log('Get all Products not available' + error);
    });

  }

  deleteProduct(id: number) {
    this.prodService.deleteProduct(id).subscribe(sucess => {
        console.log('deleteProduct');
        this.getAllProduct();
      }, error => {
        console.log(error);
      }, () => {
      }
    );


  }




  goToUpdateProduct(id) {
    this.router.navigate(['/component/modifierProduit', id]);

  }

}


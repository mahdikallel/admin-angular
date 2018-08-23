import {Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from '../shared/Entities/product';
import {HttpHeaders} from '@angular/common/http';
import {ProductService} from '../produit/produit.service';
import {id} from '@swimlane/ngx-datatable/release/utils';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Component({
  selector: 'app-productes',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [Product],
  styles: [`
    .ng-valid { border-color: green; }
    .ng-invalid { border-color: red; }    
  `]

})


export class AddProductComponent implements OnInit, OnDestroy {

  products: Product[];
  product: Product;

  formError = {nom: false, prix: false,prixAchat: false};


  ngOnDestroy(): void {
  }

  constructor(private prodService: ProductService, private router: Router) {
    console.log('constructor : init ProductComponent ');
  }

  ngOnInit() {
    this.createForm();
    console.log('init AddProductComponent ');
    this.product = new Product();
  }

  getAllProduct() {
    console.log('getAllProduct');
    this.prodService.getProducts().subscribe(sucess => {
      console.log('Get all Products  success');
      this.products = sucess;
    }, error => {
      console.log('Get all Products not available' + error);
    });
  }


  saveProduct(product: Product) {
    console.log(product);
    this.prodService.saveProduct(product).subscribe(success => {
        console.log('saveProduct');
        this.getAllProduct();
      }, error => {
        console.log('error', error);
      }, () => {
      }
    );
  }


  myform: FormGroup;
  nom: FormControl;
  prix: FormControl;
  prixAchat: FormControl;


  createForm() {
    this.myform = new FormGroup({
      nom: new FormControl('', Validators.required),
      prix: new FormControl('', [
        Validators.required
      ]),
      prixAchat: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit() {
    console.log(this.myform.controls.nom.invalid);
    if(this.myform.controls.nom.invalid){
      this.formError.nom = true;
    }
    console.log(this.myform.controls.prix.invalid);
    if(this.myform.controls.prix.invalid){
      this.formError.prix = true;
    }
    console.log(this.myform.controls.prixAchat.invalid);
    if(this.myform.controls.prixAchat.invalid){
      this.formError.prixAchat = true;
    }
    if (this.myform.valid) {
      console.log('Form Submitted!');
      this.myform.reset();
      this.router.navigate(['/component/produits']);
    } else {
      console.log('Form not Submitted!');
    }

  }


}



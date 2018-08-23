import {Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from '../shared/Entities/product';
import {HttpHeaders} from '@angular/common/http';
import {ProductService} from '../produit/produit.service';
import {id} from '@swimlane/ngx-datatable/release/utils';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import 'rxjs/add/operator/find';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Component({
  selector: 'app-productes',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css'],
  providers: [Product]
})


export class UpdateproductComponent implements OnInit, OnDestroy {

  products: Product[];
  // product = {};
  product: any;
  id: number;
  private navigated: boolean;

  formError = {nom: false, prix: false, prixAchat: false};


  ngOnDestroy(): void {
  }


  constructor(private prodService: ProductService, private route: ActivatedRoute, private router: Router) {
    console.log('constructor : init ProductComponent ');
  }

  ngOnInit(): void {
    // this.route.params.forEach((params: Params) => {
    //   console.log(params['id']);
    //   if (params['id'] !== undefined) {
    //     const id = +params['id'];
    //     this.navigated = true;
    //     this.initProduct(id);
    //   } else {
    //     this.navigated = false;
    //   }
    // });
    this.route.params.subscribe(params => (this.id = params.id));
    this.initProduct();
  }

  initProduct() {
    if (this.id) {
      this.prodService.getProductById(this.id).subscribe(sucess => {
        this.product = sucess; //JSON.parse(sucess);
        console.log(sucess);
      }, error1 => {
      });
    }

  }


  getProductById(id: number) {
    this.prodService.getProduct(id).subscribe(sucess => {
        console.log('Get Product');
      }, error => {
        console.log(error);
      }, () => {
      }
    );

  }

  updateProduct(product: Product) {
    console.log(product);
    this.prodService.updateProduct(product).subscribe(success => {
        console.log('updateProduct');
        this.updateProduct(product);
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
    if (this.myform.controls.nom.invalid) {
      this.formError.nom = true;
    }
    console.log(this.myform.controls.prix.invalid);
    if (this.myform.controls.prix.invalid) {
      this.formError.prix = true;
    }
    console.log(this.myform.controls.prixAchat.invalid);
    if (this.myform.controls.prixAchat.invalid) {
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


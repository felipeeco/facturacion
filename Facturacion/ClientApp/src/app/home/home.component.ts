import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  formCreateProduct: FormGroup;

  constructor(private productService: ProductServiceService) {
    this.formCreateProduct = new FormGroup
      ({
        'name': new FormControl("", [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-zA-ZÀ-ÖØ-öø-ÿ]+$")]),
        'price': new FormControl(0, [Validators.required]),
        'stock': new FormControl(0, [Validators.required])
      });
  }

  submitCreateProduct() {
    if (this.formCreateProduct.valid == true) {
      this.productService.saveProduct(this.formCreateProduct.value).subscribe((data: any) => {
        console.log(data);
      });
    }
  }

}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  formCreateProduct: FormGroup;
  formCreateProductOBJ = {
    name: false,
    price: false,
    stock: false
  };

  constructor(private productService: ProductServiceService) {
    this.formCreateProduct = new FormGroup
      ({
        'name': new FormControl("", [Validators.required]),
        'price': new FormControl(0, [Validators.required, Validators.min(1000)]),
        'stock': new FormControl(0, [Validators.required, Validators.min(1)])
      });
  }

  submitCreateProduct(){
    if (this.formCreateProduct.valid == false){
      if (this.formCreateProduct.controls["name"].touched == false && this.formCreateProduct.controls["name"].errors.required == true) {
        this.formCreateProductOBJ.name = true;
      }
      if (this.formCreateProduct.controls["price"].errors.min) {
        this.formCreateProductOBJ.price = true;
      }
      if (this.formCreateProduct.controls["stock"].errors.min) {
        this.formCreateProductOBJ.stock = true;
      }
    }else{
      this.productService.saveProduct(this.formCreateProduct.value).subscribe((data: any) => {
        console.log(data);
      });
    }
  }
}

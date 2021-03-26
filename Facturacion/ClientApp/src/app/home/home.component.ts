import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  formCreateProduct: FormGroup;

  constructor() {
    this.formCreateProduct = new FormGroup
      ({
        'name': new FormControl("", [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-zA-ZÀ-ÖØ-öø-ÿ]+$")]),
        'price': new FormControl(0, [Validators.required]),
        'stock': new FormControl(0, [Validators.required])
      });
  }

}

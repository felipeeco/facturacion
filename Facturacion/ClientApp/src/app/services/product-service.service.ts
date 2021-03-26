import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  urlBase: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlBase = baseUrl;
  }

  public saveProduct(ProductClass) {
    return this.http.post(this.urlBase + 'save-product', ProductClass);
  }
}

import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private injector:Injector, private http: HttpClient) { }

  getAllProducts():Observable<any>{
    const productSer=this.injector.get(ProductsService);  
    return this.http.get('https://api.restful-api.dev/objects');
  }

}

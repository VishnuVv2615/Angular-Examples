import { Component, Injector, OnInit } from '@angular/core';
import { ProductsService } from '../_services/products.service';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers:  [ ApiService ]
})
export class ContactComponent implements OnInit {
  products:any;
  constructor (private productSer:ApiService){}

  ngOnInit(): void {
    this.productSer.getAllProducts().subscribe((data)=>{
      this.products=data;
    })
  }


 

}

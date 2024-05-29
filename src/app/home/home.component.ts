import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  model:any={
    isMarried:false,
    password:'',
    confirmpass:''
  };
onSubmit(form:NgForm){
  alert('Form submitted with data: ' + JSON.stringify(this.model));
  form.reset();
}
}

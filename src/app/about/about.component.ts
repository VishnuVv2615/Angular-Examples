import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  contactForm = new FormGroup({
firstName: new FormControl("",[
  Validators.required,
  Validators.minLength(5)
]),
lastName:new FormControl("",[
  Validators.required,
  Validators.minLength(5)
]),
email:new FormControl("",
  [Validators.required,
    Validators.email
  ]
),
password:new FormControl("",[
  Validators.required,
  Validators.minLength(6)
]),
confirmPassword:new FormControl("",[
  Validators.required,
  Validators.minLength(6)
]),
mobile:new FormControl("",
  [
    Validators.required
  ]
)
  })

  onSubmit(){
    console.log(this.contactForm.value);
  }

}

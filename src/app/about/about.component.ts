import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  contactForm = new FormGroup({
firstName: new FormControl(),
lastName:new FormControl(),
email:new FormControl(),
password:new FormControl(),
confirmPassword:new FormControl(),
mobile:new FormControl()
  })

  onSubmit(){
    console.log(this.contactForm.value);
  }

}

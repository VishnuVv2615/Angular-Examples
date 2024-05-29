import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

getUsers()
{
  return[
    {id:1,name:'John',email:'john123@gmail.com'},
    {id:2,name:'Raj',email:'Raj123@gmail.com'},
    {id:3,name:'Kannan',email:'Kannan123@gmail.com'},
    {id:1,name:'Ravi',email:'ravi123@gmail.com'},
  ]
}
  constructor() { }
}

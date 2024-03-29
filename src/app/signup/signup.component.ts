import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  public signupForm !: FormGroup;
  constructor(private FormBuilder: FormBuilder, private http : HttpClient , private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.FormBuilder.group({
      username:[''],
      email:[''],
      password:[''],
      role:[]
    })

  }
  signUp(){

      this.http.post<any> ("http://localhost:9696/auth/signup",this.signupForm.value)
      .subscribe(res=>{
        alert ("Signup Successful !");
        this.signupForm.reset();
        this.router.navigate(['login']);
      }, err=>{
        alert("Something wrong ! ");
      })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public loginForm ! : FormGroup
    constructor(private FormBuilder: FormBuilder, private http: HttpClient, private router: Router){}

    ngOnInit(): void {
      this.loginForm = this.FormBuilder.group({
        username:[''],
        password:['']
      })

    }
login(){
  this.http.post <any>("http://localhost:9696/auth/signin", this.loginForm.value)
  .subscribe(res=>{
console.log(res)
    if (res.username==this.loginForm.value.username  ){
      localStorage.setItem('username', res.username);
      localStorage.setItem('roles', res.roles[0]);
      alert ("Login Success");
      this.loginForm.reset();
      this.router.navigate(['listefilm'])
    }else{
      alert("user not found");
    }
  }, err=>{
    alert ("Something wrong !");
  })
}

}

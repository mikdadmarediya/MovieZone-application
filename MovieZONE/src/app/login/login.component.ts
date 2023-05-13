import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { LoginService } from '../shared/login.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService:ApiService, private loginService:LoginService, private route: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  formGroup!: FormGroup;
  static uName:string;

  initForm() {
    this.formGroup = new FormGroup({  
      'userName':new FormControl('',[Validators.required,Validators.minLength(5)]),
      'password':new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }

  loginProcess() {
    if(this.formGroup.valid) {
      console.log("ng model username: "+this.formGroup.value.userName);
      LoginComponent.uName=this.formGroup.value.userName;
      this.apiService.login(this.formGroup.value).subscribe(result=>{
          console.log("inside login process method "+result);
          this.loginService.setToken(result);
          this.route.navigate(['/dashboard']);
        }, error =>{
          alert("Incorrect UserName and Password || Please enter correct Credentials or Register to get one");
          console.log(error);
      })
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private apiService:ApiService, private route:Router,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    'userName':new FormControl('',[Validators.required,Validators.minLength(5)]),
    'password':new FormControl('',[Validators.required,Validators.minLength(6)]),
    'email':new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9+._-]+@[a-z]+\.[a-z]{2,3}')]),
    'contactno':new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)])
  })

  registerUser() {
    console.log("Inside the register method");
    this.apiService.register(this.registerForm.value).subscribe((response:any)=>{
      console.log("User Registerd");
      this.route.navigate(['login'])
    }, error =>{
      this.snackBar.open('User already exists, try registering with a different UserName', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['mat-toolbar', 'mat-primary']
      });
        console.log(error);
    })
  }

}

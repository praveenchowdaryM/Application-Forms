import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { array } from '../contract/array';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private service:RegistrationService, private router: Router) { }
  submitted = false;
  registeredData: array[] = undefined as any;
  loginPage: any;
  registrationPage: any;
  ngOnInit(): void {
    this.loginPage = this.formBuilder.group({
      userName: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required])
    });
    this.registeredData = this.service.getRegisterData();
  }
  login(){
    this.submitted = true;
    for(const data of this.registeredData) {
      if(this.loginPage.value.userName == data.userName && this.loginPage.value.password == data.password) {
        this.router.navigate(['/dashboard']);
      } 
      else {
        this.registrationPage = 'Please Check User Name And Password';
      }
    }
  }
}

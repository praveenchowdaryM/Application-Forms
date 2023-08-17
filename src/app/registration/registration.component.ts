import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private service: RegistrationService) { }
  submitted = false;
  registrationPage: any;
  ngOnInit(): void {
    this.registrationPage = this.formBuilder.group({
      userName: this.formBuilder.control('', [Validators.required]),
      firstName: this.formBuilder.control('', [Validators.required]),
      lastName: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      confirmPassword: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      phoneNumber: this.formBuilder.control('', [Validators.required, Validators.pattern("[- +()0-9 ]{12}")])
    })
  }
  clear(){
    this.registrationPage.reset();
  }
  register() {
    this.submitted = true;
    if (this.registrationPage.valid && this.registrationPage.get('password')?.value === this.registrationPage.get('confirmPassword')?.value) {
      this.service.registeredData(this.registrationPage.value);
      alert('Registerd SuccessFully');
    }
  }
}
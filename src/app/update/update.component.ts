import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { array } from '../contract/array';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updatePage: any;
  registredData:  array[] =undefined as any;
  index: number = undefined as any;
  constructor(private formBuilder:FormBuilder, private service: RegistrationService){}
  ngOnInit(): void {
    this.updatePage = this.formBuilder.group({
      userName: this.formBuilder.control(''),
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      phoneNumber: this.formBuilder.control('')
    });
    this.registredData = this.service.getRegisterData();
  }
}

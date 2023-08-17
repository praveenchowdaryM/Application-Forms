import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { array } from '../contract/array';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registeredData: array[] = undefined as any;
  constructor(private service: RegistrationService, private router: Router) { }
  ngOnInit(): void {
    this.registeredData = this.service.getRegisterData();
  }
  view(index: number) {
    this.router.navigate(['/view',index]);
  }
  delete(index: number){

  }
}

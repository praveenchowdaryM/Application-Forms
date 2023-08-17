import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { array } from '../contract/array';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private service: RegistrationService,private route:ActivatedRoute) { }
  registeredData: array[] = undefined as any;
  index: number = undefined as any;
  viewUser: any;
  ngOnInit(): void {
    this.registeredData = this.service.getRegisterData();
    this.index = Number(this.route.snapshot.paramMap.get('id'));
    this.viewUser = this.registeredData[this.index];

  }
}

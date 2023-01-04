import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent implements OnInit {
@Input() employeeData:any;
  constructor() { }

  selectedItem:any;

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor(public SharedDataService : SharedDataService) { }

  screenTitle = 'Data Binding';
  userName:any;
  EmployeeList:any = [];
  index = 0;


  ngOnInit(): void {
    this.SharedDataService.getJsonData().subscribe((resp:any) =>{
      this.EmployeeList = resp.EmployeeList;
      console.log("getJsonData",this.EmployeeList);
    })
  }

  enterUsername(event:any){
    console.log("username event",event.target.value);
    this.userName = event.target.value;
  }

  onSelectedTab(name:any,index:any){
    this.index = index;
  }

}

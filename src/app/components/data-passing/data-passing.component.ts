import { Component, Input, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-data-passing',
  templateUrl: './data-passing.component.html',
  styleUrls: ['./data-passing.component.css']
})
export class DataPassingComponent implements OnInit {

  @Input() dataInput = '';
  serviceData:any;

  constructor(private sharedDataService :SharedDataService) {
    this.sharedDataService.getData().subscribe(data=>{
      this.serviceData = data;
    })
   }

  ngOnInit(): void {
  }

}

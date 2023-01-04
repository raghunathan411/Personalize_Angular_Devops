import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {

  constructor(private sharedDataService :SharedDataService,private router:Router) { }

  dataPassing = "Data sharing between parent to child";

  dataPassingService = "Data sharing through Service";

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.sharedDataService.sendData(this.dataPassingService);
  }

  dataTransferService(){
    this.router.navigate(['/dataSharing']);
  }

  dataBindingSreen(){
    this.router.navigate(['/data-binding']);
  }

}

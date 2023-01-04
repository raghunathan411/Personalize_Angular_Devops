import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  behaviourSubject = new BehaviorSubject('asf');

  constructor(public http : HttpClient) { }

  sendData(data:any) {
    this.behaviourSubject.next(data);
  }

  getData(): Observable<any> {
    return this.behaviourSubject.asObservable();
  }

  getJsonData(){
    return this.http.get("./assets/sample.json");
  }
}

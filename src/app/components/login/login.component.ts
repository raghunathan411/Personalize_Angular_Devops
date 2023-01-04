import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  loginForm:any;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    })
  }

  submit(){
    console.log("submit",this.loginForm.value);
    if(this.loginForm.value.username != '' && this.loginForm.value.password != ''){
      this.router.navigate(['/demo']);
    }
  }

}

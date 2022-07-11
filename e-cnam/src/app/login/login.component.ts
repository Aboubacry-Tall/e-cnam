import { Component, OnInit } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  
  user: User =new User();
  msg='null';
  constructor() { }

  ngOnInit(): void {
  }
  loginUser(){
    alert("ggggggggggggg")
  }
}

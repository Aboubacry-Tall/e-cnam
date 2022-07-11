import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { User } from './models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  msg = 'null';
  constructor(private service: ServicesService) {}

  ngOnInit(): void {}

  loginUser() {
    this.service.login(this.user).subscribe(
      (data) => {},
      (error) => console.log(error)
    );
  }
}

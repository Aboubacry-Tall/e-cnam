import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private service: ServicesService, private router:Router) {}

  ngOnInit(): void {}

  loginUser() {
    this.service.login(this.user).subscribe(
      (data) => {
        if(data == null){
          console.log("qqqqqqqqqqqqqqqqq")
          alert("verifier votre login ou mot de passe")
        }else{
          console.log("ok")
          this.router.navigate(['/home']);
        }
      },
      (error) => console.log(error)
    );
  }
}

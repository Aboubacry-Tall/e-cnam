import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'ECNAM';
  constructor(private router: Router,
    private servicesService: ServicesService) { }

  ngOnInit(): void {
  }

  UserId(){
    return localStorage.getItem('userId');
  }
  logout(){
    localStorage.removeItem('userId');
    localStorage.removeItem('login');
    this.router.navigate(['']);
  }
}

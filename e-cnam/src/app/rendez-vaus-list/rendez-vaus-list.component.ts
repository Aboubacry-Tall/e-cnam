import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { RendezVaus } from '../login/models/RendiezVous';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-rendez-vaus-list',
  templateUrl: './rendez-vaus-list.component.html',
  styleUrls: ['./rendez-vaus-list.component.css']
})
export class RendezVausListComponent implements OnInit {
  rendezVaus!: Observable<RendezVaus[]>;
  
  constructor(private service: ServicesService, private router:Router) {}

  
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.rendezVaus = this.service.getRendiezvausList();
  }

  
  RendezVausDetails(id?: number){
    this.router.navigate(['details', id]);
  }

  updateRendezVaus(id?: number){
    this.router.navigate(['update', id]);
  }
}

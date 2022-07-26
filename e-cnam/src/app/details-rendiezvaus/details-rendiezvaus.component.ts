import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVaus } from '../login/models/RendiezVous';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-details-rendiezvaus',
  templateUrl: './details-rendiezvaus.component.html',
  styleUrls: ['./details-rendiezvaus.component.css']
})
export class DetailsRendiezvausComponent implements OnInit {

  id!: number;
  rendezVaus!: RendezVaus;

  constructor(private route: ActivatedRoute,private router: Router,
    private servicesService: ServicesService) { }

  ngOnInit(): void {

    this.rendezVaus = new RendezVaus();

    this.id = this.route.snapshot.params['id'];
    
    this.servicesService.getRendezVaus(this.id)
      .subscribe(data => {
        console.log(data)
        this.rendezVaus = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['rendezVaus']);
  }

}

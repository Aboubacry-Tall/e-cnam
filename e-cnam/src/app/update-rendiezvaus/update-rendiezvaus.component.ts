import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVaus } from '../login/models/RendiezVous';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update-rendiezvaus',
  templateUrl: './update-rendiezvaus.component.html',
  styleUrls: ['./update-rendiezvaus.component.css']
})
export class UpdateRendiezvausComponent implements OnInit {
  
  id!: number;
  rendezVau!: RendezVaus;
  constructor(private route: ActivatedRoute,private router: Router,
    private servicesService: ServicesService) { }

  ngOnInit(): void {

    this.rendezVau = new RendezVaus();

    this.id = this.route.snapshot.params['id'];
    
    this.servicesService.getRendezVaus(this.id)
      .subscribe(data => {
        console.log(data)
        this.rendezVau = data;
      }, error => console.log(error));
  }


  updateRendezVaus() {
    this.servicesService.updateRendiezVaus(this.id, this.rendezVau)
      .subscribe(data => {
        console.log(data);
        this.rendezVau = new RendezVaus();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateRendezVaus();    
  }

  gotoList() {
    this.router.navigate(['/rendezVaus']);
  }
}

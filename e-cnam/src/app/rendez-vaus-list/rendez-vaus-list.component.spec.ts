import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVausListComponent } from './rendez-vaus-list.component';

describe('RendezVausListComponent', () => {
  let component: RendezVausListComponent;
  let fixture: ComponentFixture<RendezVausListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezVausListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendezVausListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

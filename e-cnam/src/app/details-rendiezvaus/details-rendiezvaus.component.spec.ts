import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRendiezvausComponent } from './details-rendiezvaus.component';

describe('DetailsRendiezvausComponent', () => {
  let component: DetailsRendiezvausComponent;
  let fixture: ComponentFixture<DetailsRendiezvausComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRendiezvausComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRendiezvausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

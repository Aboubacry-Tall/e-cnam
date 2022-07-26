import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRendiezvausComponent } from './update-rendiezvaus.component';

describe('UpdateRendiezvausComponent', () => {
  let component: UpdateRendiezvausComponent;
  let fixture: ComponentFixture<UpdateRendiezvausComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRendiezvausComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRendiezvausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

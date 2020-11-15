import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEnlacesComponent } from './listado-enlaces.component';

describe('ListadoEnlacesComponent', () => {
  let component: ListadoEnlacesComponent;
  let fixture: ComponentFixture<ListadoEnlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoEnlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEnlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

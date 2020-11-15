import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnlacesComponent } from './admin-enlaces.component';

describe('AdminEnlacesComponent', () => {
  let component: AdminEnlacesComponent;
  let fixture: ComponentFixture<AdminEnlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

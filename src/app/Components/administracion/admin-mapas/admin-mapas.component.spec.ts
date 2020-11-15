import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMapasComponent } from './admin-mapas.component';

describe('AdminMapasComponent', () => {
  let component: AdminMapasComponent;
  let fixture: ComponentFixture<AdminMapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMapasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

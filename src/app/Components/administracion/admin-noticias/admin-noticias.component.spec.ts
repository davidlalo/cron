import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoticiasComponent } from './admin-noticias.component';

describe('AdminNoticiasComponent', () => {
  let component: AdminNoticiasComponent;
  let fixture: ComponentFixture<AdminNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

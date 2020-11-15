import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCorreosComponent } from './admin-correos.component';

describe('AdminCorreosComponent', () => {
  let component: AdminCorreosComponent;
  let fixture: ComponentFixture<AdminCorreosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCorreosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCorreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

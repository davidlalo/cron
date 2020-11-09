import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColemapaComponent } from './colemapa.component';

describe('ColemapaComponent', () => {
  let component: ColemapaComponent;
  let fixture: ComponentFixture<ColemapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColemapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColemapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

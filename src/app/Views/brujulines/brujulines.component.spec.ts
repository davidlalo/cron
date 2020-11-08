import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrujulinesComponent } from './brujulines.component';

describe('BrujulinesComponent', () => {
  let component: BrujulinesComponent;
  let fixture: ComponentFixture<BrujulinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrujulinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrujulinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

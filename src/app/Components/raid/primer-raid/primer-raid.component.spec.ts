import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerRaidComponent } from './primer-raid.component';

describe('PrimerRaidComponent', () => {
  let component: PrimerRaidComponent;
  let fixture: ComponentFixture<PrimerRaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerRaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerRaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

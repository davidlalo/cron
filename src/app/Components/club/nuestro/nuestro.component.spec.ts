import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroComponent } from './nuestro.component';

describe('NuestroComponent', () => {
  let component: NuestroComponent;
  let fixture: ComponentFixture<NuestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

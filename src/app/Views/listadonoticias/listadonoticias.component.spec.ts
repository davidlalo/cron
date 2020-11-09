import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadonoticiasComponent } from './listadonoticias.component';

describe('ListadonoticiasComponent', () => {
  let component: ListadonoticiasComponent;
  let fixture: ComponentFixture<ListadonoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadonoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadonoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

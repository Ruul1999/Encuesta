import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEncuestasComponent } from './list-encuestas.component';

describe('ListEncuestasComponent', () => {
  let component: ListEncuestasComponent;
  let fixture: ComponentFixture<ListEncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEncuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

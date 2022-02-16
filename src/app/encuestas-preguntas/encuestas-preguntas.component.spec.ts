import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasPreguntasComponent } from './encuestas-preguntas.component';

describe('EncuestasPreguntasComponent', () => {
  let component: EncuestasPreguntasComponent;
  let fixture: ComponentFixture<EncuestasPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestasPreguntasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

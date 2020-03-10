import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineRepublicaDominicaComponent } from './grafica-line-republica-dominica.component';

describe('GraficaLineRepublicaDominicaComponent', () => {
  let component: GraficaLineRepublicaDominicaComponent;
  let fixture: ComponentFixture<GraficaLineRepublicaDominicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineRepublicaDominicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineRepublicaDominicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleRepublicaDominicaComponent } from './grafica-circle-republica-dominica.component';

describe('GraficaCircleRepublicaDominicaComponent', () => {
  let component: GraficaCircleRepublicaDominicaComponent;
  let fixture: ComponentFixture<GraficaCircleRepublicaDominicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleRepublicaDominicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleRepublicaDominicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCirclePuertoRicoComponent } from './grafica-circle-puerto-rico.component';

describe('GraficaCirclePuertoRicoComponent', () => {
  let component: GraficaCirclePuertoRicoComponent;
  let fixture: ComponentFixture<GraficaCirclePuertoRicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCirclePuertoRicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCirclePuertoRicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLinePuertoRicoComponent } from './grafica-line-puerto-rico.component';

describe('GraficaLinePuertoRicoComponent', () => {
  let component: GraficaLinePuertoRicoComponent;
  let fixture: ComponentFixture<GraficaLinePuertoRicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLinePuertoRicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLinePuertoRicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

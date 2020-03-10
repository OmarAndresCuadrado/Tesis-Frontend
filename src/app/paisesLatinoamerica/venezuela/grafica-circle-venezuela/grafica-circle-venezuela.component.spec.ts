import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleVenezuelaComponent } from './grafica-circle-venezuela.component';

describe('GraficaCircleVenezuelaComponent', () => {
  let component: GraficaCircleVenezuelaComponent;
  let fixture: ComponentFixture<GraficaCircleVenezuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleVenezuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleVenezuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

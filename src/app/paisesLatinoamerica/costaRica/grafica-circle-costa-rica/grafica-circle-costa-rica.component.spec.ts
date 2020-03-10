import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleCostaRicaComponent } from './grafica-circle-costa-rica.component';

describe('GraficaCircleCostaRicaComponent', () => {
  let component: GraficaCircleCostaRicaComponent;
  let fixture: ComponentFixture<GraficaCircleCostaRicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleCostaRicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleCostaRicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

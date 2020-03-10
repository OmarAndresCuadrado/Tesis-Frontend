import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleCubaComponent } from './grafica-circle-cuba.component';

describe('GraficaCircleCubaComponent', () => {
  let component: GraficaCircleCubaComponent;
  let fixture: ComponentFixture<GraficaCircleCubaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleCubaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleCubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineCubaComponent } from './grafica-line-cuba.component';

describe('GraficaLineCubaComponent', () => {
  let component: GraficaLineCubaComponent;
  let fixture: ComponentFixture<GraficaLineCubaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineCubaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineCubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

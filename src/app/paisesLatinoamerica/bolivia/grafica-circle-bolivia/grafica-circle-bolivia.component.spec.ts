import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleBoliviaComponent } from './grafica-circle-bolivia.component';

describe('GraficaCircleBoliviaComponent', () => {
  let component: GraficaCircleBoliviaComponent;
  let fixture: ComponentFixture<GraficaCircleBoliviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleBoliviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleBoliviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

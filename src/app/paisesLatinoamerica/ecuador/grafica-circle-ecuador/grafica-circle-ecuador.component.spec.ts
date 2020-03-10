import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleEcuadorComponent } from './grafica-circle-ecuador.component';

describe('GraficaCircleEcuadorComponent', () => {
  let component: GraficaCircleEcuadorComponent;
  let fixture: ComponentFixture<GraficaCircleEcuadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleEcuadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleEcuadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

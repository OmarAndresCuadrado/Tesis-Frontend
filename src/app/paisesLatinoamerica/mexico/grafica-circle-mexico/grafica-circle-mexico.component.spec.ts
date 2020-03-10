import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleMexicoComponent } from './grafica-circle-mexico.component';

describe('GraficaCircleMexicoComponent', () => {
  let component: GraficaCircleMexicoComponent;
  let fixture: ComponentFixture<GraficaCircleMexicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleMexicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

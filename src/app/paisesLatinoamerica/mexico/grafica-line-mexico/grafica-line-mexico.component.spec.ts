import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineMexicoComponent } from './grafica-line-mexico.component';

describe('GraficaLineMexicoComponent', () => {
  let component: GraficaLineMexicoComponent;
  let fixture: ComponentFixture<GraficaLineMexicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineMexicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLinePanamaComponent } from './grafica-line-panama.component';

describe('GraficaLinePanamaComponent', () => {
  let component: GraficaLinePanamaComponent;
  let fixture: ComponentFixture<GraficaLinePanamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLinePanamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLinePanamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

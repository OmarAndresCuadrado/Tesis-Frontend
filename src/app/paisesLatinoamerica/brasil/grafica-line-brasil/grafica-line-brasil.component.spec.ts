import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineBrasilComponent } from './grafica-line-brasil.component';

describe('GraficaLineBrasilComponent', () => {
  let component: GraficaLineBrasilComponent;
  let fixture: ComponentFixture<GraficaLineBrasilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineBrasilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineBrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

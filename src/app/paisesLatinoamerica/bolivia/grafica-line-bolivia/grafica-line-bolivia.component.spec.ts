import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineBoliviaComponent } from './grafica-line-bolivia.component';

describe('GraficaLineBoliviaComponent', () => {
  let component: GraficaLineBoliviaComponent;
  let fixture: ComponentFixture<GraficaLineBoliviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineBoliviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineBoliviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

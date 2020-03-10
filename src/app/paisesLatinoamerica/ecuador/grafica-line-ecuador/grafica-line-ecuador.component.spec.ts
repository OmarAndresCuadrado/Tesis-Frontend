import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineEcuadorComponent } from './grafica-line-ecuador.component';

describe('GraficaLineEcuadorComponent', () => {
  let component: GraficaLineEcuadorComponent;
  let fixture: ComponentFixture<GraficaLineEcuadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineEcuadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineEcuadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineVenezuelaComponent } from './grafica-line-venezuela.component';

describe('GraficaLineVenezuelaComponent', () => {
  let component: GraficaLineVenezuelaComponent;
  let fixture: ComponentFixture<GraficaLineVenezuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineVenezuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineVenezuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

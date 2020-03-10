import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleParaguayComponent } from './grafica-circle-paraguay.component';

describe('GraficaCircleParaguayComponent', () => {
  let component: GraficaCircleParaguayComponent;
  let fixture: ComponentFixture<GraficaCircleParaguayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleParaguayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleParaguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

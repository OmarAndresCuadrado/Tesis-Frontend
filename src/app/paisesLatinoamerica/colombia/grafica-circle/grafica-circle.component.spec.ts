import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleComponent } from './grafica-circle.component';

describe('GraficaCircleComponent', () => {
  let component: GraficaCircleComponent;
  let fixture: ComponentFixture<GraficaCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleArgentinaComponent } from './grafica-circle-argentina.component';

describe('GraficaCircleArgentinaComponent', () => {
  let component: GraficaCircleArgentinaComponent;
  let fixture: ComponentFixture<GraficaCircleArgentinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleArgentinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

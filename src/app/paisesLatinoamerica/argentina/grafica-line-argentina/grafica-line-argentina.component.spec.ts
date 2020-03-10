import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineArgentinaComponent } from './grafica-line-argentina.component';

describe('GraficaLineArgentinaComponent', () => {
  let component: GraficaLineArgentinaComponent;
  let fixture: ComponentFixture<GraficaLineArgentinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineArgentinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

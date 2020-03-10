import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleBrasilComponent } from './grafica-circle-brasil.component';

describe('GraficaCircleBrasilComponent', () => {
  let component: GraficaCircleBrasilComponent;
  let fixture: ComponentFixture<GraficaCircleBrasilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleBrasilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleBrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

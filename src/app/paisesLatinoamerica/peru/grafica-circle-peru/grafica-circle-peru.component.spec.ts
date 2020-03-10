import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCirclePeruComponent } from './grafica-circle-peru.component';

describe('GraficaCirclePeruComponent', () => {
  let component: GraficaCirclePeruComponent;
  let fixture: ComponentFixture<GraficaCirclePeruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCirclePeruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCirclePeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

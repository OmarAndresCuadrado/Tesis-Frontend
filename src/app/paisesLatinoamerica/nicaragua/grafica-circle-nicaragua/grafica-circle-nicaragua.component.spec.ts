import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleNicaraguaComponent } from './grafica-circle-nicaragua.component';

describe('GraficaCircleNicaraguaComponent', () => {
  let component: GraficaCircleNicaraguaComponent;
  let fixture: ComponentFixture<GraficaCircleNicaraguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleNicaraguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleNicaraguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCirclePanamaComponent } from './grafica-circle-panama.component';

describe('GraficaCirclePanamaComponent', () => {
  let component: GraficaCirclePanamaComponent;
  let fixture: ComponentFixture<GraficaCirclePanamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCirclePanamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCirclePanamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

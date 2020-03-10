import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleChileComponent } from './grafica-circle-chile.component';

describe('GraficaCircleChileComponent', () => {
  let component: GraficaCircleChileComponent;
  let fixture: ComponentFixture<GraficaCircleChileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleChileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

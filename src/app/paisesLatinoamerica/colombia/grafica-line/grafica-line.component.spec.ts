import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineComponent } from './grafica-line.component';

describe('GraficaLineComponent', () => {
  let component: GraficaLineComponent;
  let fixture: ComponentFixture<GraficaLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

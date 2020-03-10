import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineParaguayComponent } from './grafica-line-paraguay.component';

describe('GraficaLineParaguayComponent', () => {
  let component: GraficaLineParaguayComponent;
  let fixture: ComponentFixture<GraficaLineParaguayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineParaguayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineParaguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

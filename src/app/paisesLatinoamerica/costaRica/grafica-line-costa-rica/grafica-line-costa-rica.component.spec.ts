import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineCostaRicaComponent } from './grafica-line-costa-rica.component';

describe('GraficaLineCostaRicaComponent', () => {
  let component: GraficaLineCostaRicaComponent;
  let fixture: ComponentFixture<GraficaLineCostaRicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineCostaRicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineCostaRicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineNicaraguaComponent } from './grafica-line-nicaragua.component';

describe('GraficaLineNicaraguaComponent', () => {
  let component: GraficaLineNicaraguaComponent;
  let fixture: ComponentFixture<GraficaLineNicaraguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineNicaraguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineNicaraguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

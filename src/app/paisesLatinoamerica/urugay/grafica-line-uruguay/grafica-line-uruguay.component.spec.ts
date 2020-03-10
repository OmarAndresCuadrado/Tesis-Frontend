import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineUruguayComponent } from './grafica-line-uruguay.component';

describe('GraficaLineUruguayComponent', () => {
  let component: GraficaLineUruguayComponent;
  let fixture: ComponentFixture<GraficaLineUruguayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineUruguayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineUruguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

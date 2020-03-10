import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineChileComponent } from './grafica-line-chile.component';

describe('GraficaLineChileComponent', () => {
  let component: GraficaLineChileComponent;
  let fixture: ComponentFixture<GraficaLineChileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineChileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
